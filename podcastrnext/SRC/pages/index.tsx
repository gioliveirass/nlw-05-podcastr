export default function Home(props) {
  return (
    <h1>Index</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return { 
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, // A cada 8 horas (60*60*8) quando a página for acessada uma nova chamada API vai ser feita
  }
}
