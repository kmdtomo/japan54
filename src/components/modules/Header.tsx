'use client'

import { useEffect, useState } from 'react'

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    // 現在のパスを取得
    setCurrentPath(window.location.pathname)
    
    // トップページ以外の場合は初期表示から背景色を付与
    if (window.location.pathname !== '/') {
      setIsScrolled(true)
      return
    }

    // PCのみスクロール量によって背景色を変化させる
    // スマホでは最初から背景色を表示
    const handleScroll = () => {
      // 200px以上スクロールしたかどうかを判定
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    // スマホでは最初から背景色を表示
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      setIsScrolled(true)
    } else {
      // PCの場合はスクロールイベントリスナーを追加
      window.addEventListener('scroll', handleScroll)
    }

    // クリーンアップ関数
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // メニューを開閉する関数
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // 現在のページかどうかを判定する関数
  const isCurrentPage = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${className}`}>
      {/* 斜めの背景コンテナ */}
      <div className={`relative w-full h-16 transition-colors duration-300 ${isScrolled ? 'bg-[#011533]' : 'bg-transparent'}`}>
        {/* ハンバーガーメニューボタン - スマホのみ表示（左側に配置） */}
        <div className="absolute top-0 left-0 h-full z-30 md:hidden flex items-center pl-4">
          <button 
            onClick={toggleMenu}
            className="w-10 h-10 flex flex-col justify-center items-center bg-transparent"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* 右上のお問い合わせリンク（三角形エリアを含む） - PCのみ表示 */}
        <div className="absolute top-0 right-0 h-full group z-20 hidden md:block">
          {/* 赤い三角形（お問い合わせ内容が表示される領域） */}
          <a href="/contact">
            <div 
              className="absolute top-0 right-0 w-[calc(253px)] h-full bg-red-700 z-20 transition transform duration-300 cursor-pointer hover:bg-red-800"
              style={{
                clipPath: 'polygon(100% 0, 30% 0, 16% 100%, 100% 100%)',
              }}
            >
              {/* お問い合わせテキスト */}
              <div className="w-full h-full flex justify-center items-center text-white ml-6 font-bold">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.94 6.3l7.08 4.16a1 1 0 001.06 0l7.08-4.16A2 2 0 0017.69 4H2.31a2 2 0 00-.37 2.3z" />
                  <path d="M18 8.5l-7.08 4.16c-.83.48-1.85.48-2.67 0L2.14 8.5V14a2 2 0 002 2h12a2 2 0 002-2V8.5z" />
                </svg>
                <span>お問い合わせ</span>
              </div>
            </div>
          </a>
        </div>

        {/* スマホ用お問い合わせボタン - スマホのみ表示 */}
        <div className="absolute top-0 right-0 h-full z-20 md:hidden">
          <a href="/contact">
            <div 
              className="absolute top-0 right-0 w-[150px] h-full bg-red-700 z-20 transition transform duration-300 cursor-pointer hover:bg-red-800"
              style={{
                clipPath: 'polygon(100% 0, 30% 0, 17% 100%, 100% 100%)',
              }}
            >
              {/* お問い合わせテキスト */}
              <div className="w-full h-full flex justify-center items-center text-white ml-4 font-bold">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.94 6.3l7.08 4.16a1 1 0 001.06 0l7.08-4.16A2 2 0 0017.69 4H2.31a2 2 0 00-.37 2.3z" />
                  <path d="M18 8.5l-7.08 4.16c-.83.48-1.85.48-2.67 0L2.14 8.5V14a2 2 0 002 2h12a2 2 0 002-2V8.5z" />
                </svg>
                <span className="text-xs">お問い合わせ</span>
              </div>
            </div>
          </a>
        </div>

        {/* ナビゲーションコンテンツ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16 relative">
            {/* ロゴ配置エリア - 中央に配置 */}
            <a href="/" className="mx-auto md:mx-0 md:absolute md:left-12">
              <img src="/japan_54_logo.jpg" alt="ロゴ" className="h-8 md:h-10 w-auto" />
            </a>

            {/* PC用ナビゲーション */}
            <nav className="hidden md:block">
              <ul className="flex space-x-10">
                <li className="relative group">
                  <a 
                    href="/" 
                    className="text-white transition transform duration-200 group-hover:text-gray-200 group-hover:scale-105"
                  >
                    トップページ
                  </a>
                  <span className={`absolute left-0 -bottom-1 w-full h-0.5 ${isCurrentPage('/') ? 'bg-red-600 scale-x-100' : 'bg-gray-200 transform scale-x-0 group-hover:scale-x-100'} transition-transform origin-left`}></span>
                </li>
                <li className="relative group">
                  <a 
                    href="/service" 
                    className="text-white transition transform duration-200 group-hover:text-gray-200 group-hover:scale-105"
                  >
                    事業内容
                  </a>
                  <span className={`absolute left-0 -bottom-1 w-full h-0.5 ${isCurrentPage('/service') ? 'bg-red-600 scale-x-100' : 'bg-gray-200 transform scale-x-0 group-hover:scale-x-100'} transition-transform origin-left`}></span>
                </li>
                <li className="relative group">
                  <a 
                    href="/recruit" 
                    className="text-white transition transform duration-200 group-hover:text-gray-200 group-hover:scale-105"
                  >
                    採用情報
                  </a>
                  <span className={`absolute left-0 -bottom-1 w-full h-0.5 ${isCurrentPage('/recruit') ? 'bg-red-600 scale-x-100' : 'bg-gray-200 transform scale-x-0 group-hover:scale-x-100'} transition-transform origin-left`}></span>
                </li>
                <li className="relative group">
                  <a 
                    href="/company" 
                    className="text-white transition transform duration-200 group-hover:text-gray-200 group-hover:scale-105"
                  >
                    会社概要
                  </a>
                  <span className={`absolute left-0 -bottom-1 w-full h-0.5 ${isCurrentPage('/company') ? 'bg-red-600 scale-x-100' : 'bg-gray-200 transform scale-x-0 group-hover:scale-x-100'} transition-transform origin-left`}></span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* モバイルメニュー - スマホのみ表示 */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* メニューコンテンツ - クリックイベントの伝播を止める */}
        <div 
          className={`absolute top-0 left-0 w-[80%] h-full bg-[#011533] transition-transform duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } pt-16 shadow-xl`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 閉じるボタン */}
          <button 
            className="absolute top-4 right-4 text-white p-2 bg-transparent"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <nav className="px-6 py-8">
            <ul className="space-y-6">
              <li>
                <a 
                  href="/" 
                  className={`text-white text-xl font-bold block py-2 relative ${isCurrentPage('/') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  トップページ
                </a>
              </li>
              <li>
                <a 
                  href="/service" 
                  className={`text-white text-xl font-bold block py-2 relative ${isCurrentPage('/service') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  事業内容
                </a>
              </li>
              <li>
                <a 
                  href="/recruit" 
                  className={`text-white text-xl font-bold block py-2 relative ${isCurrentPage('/recruit') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  採用情報
                </a>
              </li>
              <li>
                <a 
                  href="/company" 
                  className={`text-white text-xl font-bold block py-2 relative ${isCurrentPage('/company') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  会社概要
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className={`text-white text-xl font-bold block py-2 relative ${isCurrentPage('/contact') ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
