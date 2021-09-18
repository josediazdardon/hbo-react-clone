import Header from '../UI/Header/Header'
import SideNav from '../UI/SideNav/SideNav';
const MainLayout = (props) => {
    return (
        <div style={{
            background: ' linear-gradient(312deg, rgb(68, 26, 103) 0%, rgb(82, 16, 196) 45%, rgb(10, 8, 8) 100%)', minHeight: '100vh', backgroundAttachment: 'fixed',
            minHeight: '100vh',
        }}>
        <Header />
        <SideNav />
    <section className="content-container">
        {props.children}
    </section>

        </div>
    )
}
export default MainLayout;