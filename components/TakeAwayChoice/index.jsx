import Image from 'next/image'
import style from "./takeAwaychoice.module.css"
import Card from '../../commons/Card'
import {Grid} from "@material-ui/core";
import {useMainContext} from "../../config/mainContext";

const TakeAwayChoice = () => {
    const {setActivePage, setTakeOut} = useMainContext()
    const choices = [
        {name: 'Dine In', img: '/icons/dineIn.png', value: 'IN'},
        {name: 'Take Away', img: '/icons/takeAway.png', value: 'OUT'}
    ]
    const onClick = (cat) => {
        setTakeOut(cat)
        setActivePage(2)
    }

    return (
        <div className={style.container}>
            <Grid container justifyContent="center" spacing={4}>
                {
                    choices.map(
                        e => <Card key={e.name} index={e.name} title={e.name} image={e.img}
                                   onClick={() => onClick(e.value)}/>
                    )
                }
            </Grid>
        </div>
    )
}
export default TakeAwayChoice
