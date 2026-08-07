'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-text-style';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

const ToolbarButton = ({
  onClick, active, title, children
}: { onClick: () => void; active?: boolean; title: string; children: React.ReactNode }) => (
  <button
    type="button"
    onMouseDown={(e) => { e.preventDefault(); onClick(); }}
    title={title}
    className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
      active
        ? 'bg-[#0D3B5B] text-white'
        : 'text-slate-600 hover:bg-slate-100 hover:text-[#0D3B5B]'
    }`}
  >
    {children}
  </button>
);

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({ placeholder: 'Start writing your blog post here...' }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-[#1FA971] underline cursor-pointer' } }),
    ],
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none min-h-[280px] p-4 focus:outline-none text-[#0A1A23]',
      },
    },
  });

  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt('Enter URL:');
    if (!url) return;
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="border border-slate-300 rounded-xl overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-slate-200 bg-slate-50">
        {/* Text Style */}
        <div className="flex items-center gap-0.5 pr-2 border-r border-slate-200 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold">
            <strong>B</strong>
          </ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic">
            <em>I</em>
          </ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline">
            <span className="underline">U</span>
          </ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strikethrough">
            <span className="line-through">S</span>
          </ToolbarButton>
        </div>

        {/* Headings */}
        <div className="flex items-center gap-0.5 pr-2 border-r border-slate-200 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })} title="Heading 1">H1</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Heading 2">H2</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Heading 3">H3</ToolbarButton>
        </div>

        {/* Lists */}
        <div className="flex items-center gap-0.5 pr-2 border-r border-slate-200 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet List">• List</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered List">1. List</ToolbarButton>
        </div>

        {/* Alignment */}
        <div className="flex items-center gap-0.5 pr-2 border-r border-slate-200 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Align Left">⬅</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Align Center">≡</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} title="Align Right">➡</ToolbarButton>
        </div>

        {/* Blocks */}
        <div className="flex items-center gap-0.5 pr-2 border-r border-slate-200 mr-1">
          <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Blockquote">" "</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} title="Inline Code">{`<>`}</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} title="Code Block">{`{}`}</ToolbarButton>
        </div>

        {/* Link & Undo/Redo */}
        <div className="flex items-center gap-0.5">
          <ToolbarButton onClick={addLink} active={editor.isActive('link')} title="Insert Link">🔗</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().unsetLink().run()} title="Remove Link">🔗✕</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().undo().run()} title="Undo">↩</ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().redo().run()} title="Redo">↪</ToolbarButton>
        </div>
      </div>

      {/* Editor Body */}
      <EditorContent editor={editor} />

      {/* Character count */}
      <div className="px-4 py-1.5 border-t border-slate-100 bg-slate-50 flex justify-end">
        <span className="text-[10px] text-slate-400">
          {editor.storage.characterCount?.characters?.() ?? editor.getText().length} characters
        </span>
      </div>
    </div>
  );
}
