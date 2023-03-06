import Image from 'next/image'
import style from "./categories.module.css"
import Card from '../../commons/Card'
import {Grid} from "@material-ui/core";
import {useMainContext} from "../../config/mainContext";

const Categories = () => {
    const {setCategory, setActivePage} = useMainContext()

    const onClick = (cat) => {
        setCategory(cat)
        setActivePage(3)
    }

    const categoriesList = [
        {
            name: "Burgers",
            img: "/icons/burger.png"
        },
        {
            name: "Pizza",
            img: "/icons/pizza.png"
        },
        {
            name: "Tacos",
            img: "/icons/tacos.png"
        },
        {
            name: "Steak",
            img: "/icons/meat.png"
        },
        {
            name: "Pasta",
            img: "/icons/pasta.png"
        },
        {
            name: "Chicken Plate",
            img: "/icons/chicken.png"
        },
        {
            name: "Drinks",
            img: "/icons/soda.png"
        },
        {
            name: "Dessert",
            img: "/icons/iceCream.png"
        },

    ]
    return (
        <div className={style.container}>
            <Grid container justifyContent="center" spacing={4}>
                {
                    categoriesList.map(
                        e =>
                            <Card key={e.name} index={e.name} title={e.name} image={e.img}
                                  onClick={() => onClick(e.name)}/>
                    )
                }


            </Grid>
        </div>
    )
}
export default Categories
