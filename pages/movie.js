import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/Layouts/MainLayout'
import CastInfo from '../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import PosterView from '../components/UI/PosterView/PosterView'

export default function HomeView() {
  return (
      <MainLayout>
        <FeaturedMedia />
        <PosterView />
        <CastInfo />
      </MainLayout>
  )
}
