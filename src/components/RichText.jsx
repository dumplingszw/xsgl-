import React from 'react'

/**
 * 解析带标记的文本，渲染高亮效果
 * 标记语法：
 *   **文字**  => 加粗
 *   ==文字==  => 绿色高亮背景
 *   !!文字!!  => 红色警告
 */
function parseText(text) {
  if (!text) return []

  const tokens = []
  const regex = /(\*\*[^*]+\*\*|==[^=]+==|!![^!]+!!)/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', content: text.slice(lastIndex, match.index) })
    }

    const raw = match[0]
    if (raw.startsWith('**') && raw.endsWith('**')) {
      tokens.push({ type: 'bold', content: raw.slice(2, -2) })
    } else if (raw.startsWith('==') && raw.endsWith('==')) {
      tokens.push({ type: 'highlight', content: raw.slice(2, -2) })
    } else if (raw.startsWith('!!') && raw.endsWith('!!')) {
      tokens.push({ type: 'warning', content: raw.slice(2, -2) })
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    tokens.push({ type: 'text', content: text.slice(lastIndex) })
  }

  if (tokens.length === 0) {
    tokens.push({ type: 'text', content: text })
  }

  return tokens
}

export function RichText({ text, className = '' }) {
  const tokens = parseText(text)

  return (
    <span className={className}>
      {tokens.map((token, i) => {
        if (token.type === 'bold') {
          return (
            <strong key={i} className="font-black text-black">
              {token.content}
            </strong>
          )
        }
        if (token.type === 'highlight') {
          return (
            <mark
              key={i}
              className="rounded-sm bg-lime px-1 py-0.5 font-black text-black"
            >
              {token.content}
            </mark>
          )
        }
        if (token.type === 'warning') {
          return (
            <span
              key={i}
              className="rounded-sm bg-red-500 px-1 py-0.5 font-black text-white"
            >
              {token.content}
            </span>
          )
        }
        return <span key={i}>{token.content}</span>
      })}
    </span>
  )
}

export default RichText
