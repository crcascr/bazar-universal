import SearchForm from "@/components/SearchForm";

function Home(){
  return(
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Bazar Online</h1>
      <SearchForm />
    </div>
  )
}

export default Home