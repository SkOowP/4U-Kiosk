import style from "./plates.module.css";
import {Grid} from "@material-ui/core";
import Card from "../../commons/Card";
import {useMainContext} from "../../config/mainContext";

const Plates = () => {
    const {items, addItem, removeItem} = useMainContext()
    return (
        <div className={style.container}>
            <Grid container justifyContent="center" spacing={4}>
                {
                    items?.map(
                        e => <Card key={e.name} index={e.name} title={e.name} image={e.img} counter count={e.count}
                                   add={() => addItem(e.id)}
                                   remove={() => removeItem(e.id)}/>
                    )
                }
                {!items?.length > 0 &&
                <span style={{
                    fontSize: "20px",
                    fontWeight: "bold"
                }}>The items of this category will be available soon</span>}
            </Grid>
        </div>
    )
}

export default Plates
