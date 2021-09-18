import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Whos Is Watching?</span>
      </div>
      <div className="login-user__form">
        <div className="login-user__user-box">
          <image className="login-user__user-image" src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490"/>
        <div className="login-user__user-name">Brian Dang</div>
        </div>
      </div>
      <div className="login-user__buttons">
        <button className="login-user__adult">Add Adult</button>
        <button className="login-user__kid">Add Kid</button>
      </div>
      </div>
    </div>
  )
}
