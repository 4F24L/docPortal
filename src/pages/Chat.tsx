import React, { useState, useRef, useEffect } from 'react';
import { Upload, Send, FileText, X, MessageSquare, User, Bot } from 'lucide-react';
import { generateMockAIResponse } from '../utils/aiMockResponses';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  uploadDate: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.type === 'application/pdf') {
        const newFile: UploadedFile = {
          id: Date.now().toString() + Math.random(),
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
          uploadDate: new Date()
        };
        setUploadedFiles(prev => [...prev, newFile]);
        
        const systemMessage: Message = {
          id: Date.now().toString(),
          type: 'ai',
          content: `✅ Successfully uploaded "${file.name}". You can now ask questions about this PDF.`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, systemMessage]);
      }
    });
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = generateMockAIResponse(inputMessage);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const commonClasses = {
    bg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    sidebar: 'w-80 bg-gray-800/50 text-white flex flex-col border-r border-gray-700 overflow-hidden',
    header: 'p-4 border-b border-gray-700 flex-shrink-0',
    button: 'w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg relative overflow-hidden group transition-all duration-&lsqb;1200ms&rsqb ease-in-out',
    buttonHover: 'absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-&lsqb;1200ms&rsqb ease-in-out',
    fileItem: 'flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all',
    message: 'max-w-3xl rounded-lg p-4',
    userMessage: 'bg-gradient-to-r from-gray-700 to-gray-800 text-white',
    aiMessage: 'bg-gray-800/50 text-white border border-gray-700',
    input: 'flex-1 px-4 py-3 bg-gray-800/50 text-white border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent placeholder-gray-400',
    inputContainer: 'p-4 border-t border-gray-700 bg-gray-900/50',
    avatar: 'w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0',
    typingDots: 'w-2 h-2 bg-gray-400 rounded-full animate-bounce',
    sendButton: 'h-[48px] w-[48px] flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg relative overflow-hidden group transition-all duration-&lsqb;1200ms&rsqb ease-in-out disabled:opacity-50 disabled:cursor-not-allowed',
    sendButtonHover: 'absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-&lsqb;1200ms&rsqb ease-in-out'
  };

  return (
    <div className={`min-h-screen ${commonClasses.bg} text-white overflow-hidden`}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className={commonClasses.sidebar}>
          <header className={commonClasses.header}>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">PDF Chat Assistant</h1>
            <p className="text-sm text-gray-300">Upload PDFs and ask questions</p>
          </header>

          <section className="p-4 border-b border-gray-700 flex-shrink-0">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".pdf"
              multiple
              className="hidden"
            />
            <button onClick={() => fileInputRef.current?.click()} className={commonClasses.button}>
              <div className={commonClasses.buttonHover}></div>
              <span className="relative z-10 flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload PDF
              </span>
            </button>
          </section>

          <section className="flex-1 p-4 overflow-y-auto">
            <h3 className="text-sm font-medium text-gray-300 mb-3">Uploaded Files ({uploadedFiles.length})</h3>
            <div className="space-y-2">
              {uploadedFiles.map((file) => (
                <div key={file.id} className={commonClasses.fileItem}>
                  <FileText className="h-4 w-4 text-gray-300 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate text-white">{file.name}</p>
                    <p className="text-xs text-gray-300">{file.size}</p>
                  </div>
                  <button onClick={() => removeFile(file.id)} className="p-1 hover:bg-gray-700 rounded transition-colors">
                    <X className="h-3 w-3 text-gray-300" />
                  </button>
                </div>
              ))}
              {uploadedFiles.length === 0 && (
                <p className="text-sm text-gray-300 text-center py-4">No files uploaded yet</p>
              )}
            </div>
          </section>

          <footer className="p-4 border-t border-gray-700 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className={commonClasses.avatar}>
                <User className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Guest User</p>
                <p className="text-xs text-gray-300">Frontend Demo</p>
              </div>
            </div>
          </footer>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-gray-900/50">
          <section className="flex-1 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-300 p-4">
                <MessageSquare className="h-12 w-12 mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Welcome to PDF Chat Assistant</h3>
                <p className="text-center max-w-md text-gray-300">
                  Upload PDF documents using the sidebar and start asking questions about their content.
                  I'll help you understand and analyze your documents.
                </p>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.type === 'ai' && (
                      <div className={commonClasses.avatar}>
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div className={`${commonClasses.message} ${
                      message.type === 'user' ? commonClasses.userMessage : commonClasses.aiMessage
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs mt-1 text-gray-300">{message.timestamp.toLocaleTimeString()}</p>
                    </div>
                    {message.type === 'user' && (
                      <div className={commonClasses.avatar}>
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className={commonClasses.avatar}>
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className={`${commonClasses.message} ${commonClasses.aiMessage}`}>
                      <div className="flex gap-1">
                        <div className={commonClasses.typingDots}></div>
                        <div className={commonClasses.typingDots} style={{ animationDelay: '0.2s' }}></div>
                        <div className={commonClasses.typingDots} style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </section>

          <section className={commonClasses.inputContainer}>
            <div className="flex gap-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask questions about your uploaded PDFs..."
                className={commonClasses.input}
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className={commonClasses.sendButton}
              >
                <div className={commonClasses.sendButtonHover}></div>
                <span className="relative z-10">
                  <Send className="h-4 w-4" />
                </span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Chat;
