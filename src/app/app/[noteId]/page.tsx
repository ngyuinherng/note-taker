'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'
import { ArrowLeft, Trash2, FileText } from 'lucide-react'

interface Note {
  id: string
  title: string
  content: string
  user_id: string
  created_at: string
}

export default function NoteEditorPage() {
  const params = useParams()
  const router = useRouter()
  const noteId = params.noteId as string
  const [note, setNote] = useState<Note | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    const fetchNote = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }

      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('id', noteId)
        .eq('user_id', user.id)
        .single()

      if (error || !data) {
        router.push('/app')
        return
      }

      setNote(data)
      setTitle(data.title)
      setContent(data.content)
      setLoading(false)
    }

    fetchNote()
  }, [noteId, router, supabase.auth])

  const saveNote = useCallback(async () => {
    if (!note) return
    setSaving(true)

    const { error } = await supabase
      .from('notes')
      .update({
        title,
        content,
        updated_at: new Date().toISOString(),
      })
      .eq('id', note.id)

    setSaving(false)
  }, [note, title, content, supabase])

  useEffect(() => {
    if (!note) return

    const timeoutId = setTimeout(() => {
      saveNote()
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [title, content, note, saveNote])

  const deleteNote = async () => {
    if (!note) return
    if (!confirm('Are you sure you want to delete this note?')) return

    setDeleting(true)

    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', note.id)

    if (!error) {
      router.push('/app')
    } else {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    )
  }

  if (!note) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/app"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to notes
        </Link>
        <button
          onClick={deleteNote}
          disabled={deleting}
          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
        >
          <Trash2 className="w-4 h-4" />
          {deleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>

      {/* Editor */}
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="w-full text-3xl font-bold text-gray-900 outline-none mb-4 placeholder-gray-400"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing..."
          rows={20}
          className="w-full text-gray-700 outline-none resize-none placeholder-gray-400 leading-relaxed"
        />
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>
          {saving ? 'Saving...' : 'Saved'}
        </span>
        <span>
          {new Date(note.created_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  )
}
