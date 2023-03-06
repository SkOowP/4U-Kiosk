import Image from 'next/image'
import style from "./card.module.css"
import {Card, CardActionArea, CardActions} from "@material-ui/core";
import {Grid} from "@material-ui/core";

const MyCard = (props) => {

    return (
        <Grid item key={props.index}>
            <Card className={style.container} onClick={() => !props.counter && props.onClick()}>
                <CardActionArea>
                    <div className={style.card}>
                        <div className={style.cardImage} onClick={() => props.counter && props.add()}>
                            <Image width="100px" height="100px" src={props.image}/>
                            <span className={style.title}>{props.title}</span>
                        </div>

                        {props.counter &&
                        <div className={style.counterContainer}>
                            <Image width="20px" height="20px" src={'/icons/plus.png'} onClick={props.add}/>
                            <span className={style.counterText}>{props.count}</span>
                            <Image width="20px" height="20px" src={'/icons/minus.png'} onClick={props.remove}/>
                        </div>
                        }
                    </div>
                </CardActionArea>
            </Card>
        </Grid>


    )
}
export default MyCard
