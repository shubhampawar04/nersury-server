
// This is the temporary db
const plants = [
    {
    "id": 5,
    "name": "Bamboo Money Plant",
    "category": "indoor",
    "image": "https://5.imimg.com/data5/ANDROID/Default/2023/6/316413021/YQ/TE/OR/62797733/product-jpeg-500x500.jpg",
    "price": "200",
    "description": "The Lucky Bamboo plant is a household plant which is easy to care for and grows well in indirect sunlight. Many people think that it's a real bamboo plant. But it is a type of tropical water lily called Dracaena Sanderiana."
},
{
    "id": 2,
    "name": "Rose",
    "category": "Outdoor",
    "image": "https://m.media-amazon.com/images/I/41Vl7W3nwcL._AC_UF1000,1000_QL80_.jpg",
    "price": "150",
    "description": "Rose Plant"
},
{
    "id": 8,
    "name": "Mango",
    "category": "indoor",
    "image": "https://rukminim2.flixcart.com/image/850/1000/kq43iq80/plant-sapling/7/3/i/alphonso-mango-plant-1-green-era-original-imag46zzgbngfpgh.jpeg?q=20&crop=false",
    "price": "100",
    "description": "Mango Plant"
}
]

const postPlant = (req, res) => {
    const { name,
        category,
        image,
        price,
        description }
        = req.body

    if (!name) {
        return res.json({
            success: false,
            data: null,
            message: "name cannot be empty...!"
        })
    }

    if (!category) {
        return res.json({
            success: false,
            data: null,
            message: "category cannot be empty...!"
        })
    }

    if (!image) {
        return res.json({
            success: false,
            data: null,
            message: "image cannot be empty...!"
        })
    }

    if (!price) {
        return res.json({
            success: false,
            data: null,
            message: "price cannot be empty...!"
        })
    }

    if (!description) {
        return res.json({
            success: false,
            data: null,
            message: "description cannot be empty...!"
        })
    }


    const randomId = Math.round(Math.random() * 10000)

    const newPlant = {
        id: randomId,
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    }

    plants.push(newPlant)


    res.json({
        success: true,
        data: newPlant,
        message: "New plant added successfully...!"
    })
}

const getPlants = (req, res) => {
    res.json({
        success: true,
        data: plants,
        message: "All plants fetched successfully...!"
    })
}

const getPlantId =  (req, res) => {
    const { id } = req.params

    const plant = plants.find((p)=>p.id == id)

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "Plant featched successfully...!" : "Plant not found...!"
    })
}

const putPlantsId = (req, res)=>{
    const {id} = req.params

    let index = -1

    plants.forEach((plant, i)=>{
        if(plant.id == id){
            index = i
        }
    })

    const newObj = {
        id,
        name,
        category,
        image,
        price,
        description
    }
    
    if(index==-1){
        return res.json({
            success: false,
            message: `Plant not found...! for ${id}`,
            data: null
        })
    }

    else{
        plants[index] = newObj
        res.json({
            success: true,
            message: `Plant updated successfully...!`,
            data: newObj
        })
    }

}

const deletePlantId =  (req, res)=>{
    console.log("Point 1")

    const {id} = req.params

    let index = -1

    plants.forEach((plant, i)=>{
        if(plant.id==id){
            index = i
        }
    })

    if(index==-1){
        return res.json({
            success: false,
            message: `Plant not found with id ${id}`
        })
    }

    plants.slice(index, 1)

    res.json({
        success: true,
        message: "Plant deleted successfully...!",
        data: null
    })
}

export{
    postPlant,
    getPlants,
    getPlantId,
    putPlantsId,
    deletePlantId
}