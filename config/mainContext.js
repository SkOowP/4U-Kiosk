import React, {useCallback, useState, useContext} from 'react'
import data from './data.json'
import * as _ from "lodash";

export const MainContext = React.createContext({
    theme: undefined,
    setTheme: async (theme) => null,
})

export const useMainContext = () => useContext(MainContext)

export const MainContextProvider = ({children}) => {
    const init = {
        activePage: 1,
        takeout: null,
        category: null,
        orders: []
    }

    const [state, setState] = useState(init)
    const [items, setItems] = useState([])

    const setTakeOut = useCallback(
        (category) => {
            setState(
                {...state, category: category}
            )
        },
        [state, setState],
    );

    const setCategory = useCallback(
        (category) => {
            setItems(
                data.categories.find(e => e.name === category).items
            )
            setState(
                {...state, takeout: category}
            )

        },
        [state, setState],
    );

    const setActivePage = useCallback(
        (page) => {
            setState(
                {...state, activePage: page}
            )
        },
        [state, setState],
    );

    const addItem = useCallback(
        (item) => {

            const orders = [...state.orders]
            console.log("orders", orders)
            const newItems = [...items]
            if (orders.find(e => e.id === item)) {
                orders.find(e => e.id === item).count++
                newItems.find(e => e.id === item).count++
            } else {
                const selectedItem = items.find(e => e.id === item)
                selectedItem.count = 1
                orders.push({...selectedItem})
            }
            setItems(newItems)
            setState(
                {...state, orders: orders}
            )

        },
        [state, setState],
    );

    const removeItem = useCallback(
        (item) => {

            const orders = [...state.orders]
            console.log("orders", orders)
            const newItems = [...items]
            const selectedOrder = orders.find(e => e.id === item)
            console.log("orders", orders)
            if (selectedOrder) {
                if (selectedOrder.count > 1) {
                    selectedOrder.count--
                } else {
                    _.remove(orders, e => e.id === item)
                }
                newItems.find(e => e.id === item).count--
            }


            setItems(newItems)
            setState(
                {...state, orders: orders}
            )

        },
        [state, setState],
    );

    return <MainContext.Provider
        value={{
            state,
            setTakeOut,
            setActivePage,
            setCategory,
            items,
            addItem,
            removeItem
        }}>{children}</MainContext.Provider>
}