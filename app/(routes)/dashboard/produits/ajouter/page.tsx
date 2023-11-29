import { Textarea } from "../../../../../@/components/ui/textarea.jsx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../@/components/ui/select"

const AjouterProduit = () => {
    return (
      <div>
        <h1 className="font-bold text-3xl">Ajouter Produit</h1>

        <div className="flex gap-8 pt-2">
          <div className="bg-gray-100 rounded-lg px-2 py-2 ">
            <h2>Nom</h2>
            <div>
                <input
                  className="px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700 text-black w-full "
                />
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg px-2 py-2 ">
            <h2>Prix</h2>
            <div>
                <input
                  className="px-4 py-2 border rounded-md focus:outline-none focus:border-gray-700 text-black w-full"
                />
            </div>
          </div>  
        </div>

        <div className="flex py-4">
          <div className="bg-gray-100 rounded-lg px-2 py-2 min-w-[40%]">
              <h2>Description</h2>
              <div>
                <Textarea />
              </div>
          </div> 
        </div>

        <div>
          
</div>





      </div>

      
      

    )
  }
  





  export default AjouterProduit;