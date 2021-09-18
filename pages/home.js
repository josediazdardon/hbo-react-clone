import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/Layouts/MainLayout'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'

export default function HomeView() {
  return (
      <MainLayout>
        <FeaturedMedia />
        <ForYouList />
        <JustAdded />
        <PosterView />
      </MainLayout>
  )
}
