import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const SearchInput = () => {
  return (
    <form className="flex w-full max-w-2xl h-10 sm:h-11">
      <input
        placeholder="Search"
        className="w-full border-2 border-gray-300 pl-4 pr-2 rounded-l-full focus:outline-none focus:border-blue-500 text-sm sm:text-base"
      />
      <Button
        type="submit"
        variant="searchButton"
        size="search"
        className="px-4 sm:px-5"
      >
        <Search className="size-4 sm:size-5" />
      </Button>
    </form>
  )
}

export default SearchInput
