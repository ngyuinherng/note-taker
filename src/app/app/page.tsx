'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { Plus, FileText } from 'lucide-react'

interface Note {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchNotes = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })

      if (!error && data) {
        setNotes(data)
      }
      setLoading(false)
    }

    fetchNotes()
  }, [])

  const createNewNote = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data, error } = await supabase
      .from('notes')
      .insert({
        user_id: user.id,
        title: 'Untitled',
        content: '',
      })
      .select()
      .single()

    if (!error && data) {
      window.location.href = `/app/${data.id}`
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Your Notes</h1>
        <button
          onClick={createNewNote}
          className="flex items-center gap-2 h-10 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          New note
        </button>
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-gray-400" />
          </div>
          <h2 className="text-lg font-medium text-gray-900 mb-2">No notes yet</h2>
          <p className="text-gray-600 mb-6">Create your first note to get started</p>
          <button
            onClick={createNewNote}
            className="inline-flex items-center gap-2 h-10 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Create your first note
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <Link
              key={note.id}
              href={`/app/${note.id}`}
              className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                {note.title || 'Untitled'}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                {note.content || 'No content'}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(note.updated_at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
