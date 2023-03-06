import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TakeAwayChoice from "../components/TakeAwayChoice";
import Categories from "../components/Categories";
import {useMemo, useState} from "react";
import {useMainContext} from "../config/mainContext";
import Plates from "../components/Plates";
import Header from "../components/Header";

export default function Home() {
    const {state} = useMainContext()
    const Page = useMemo(
        () => {
            switch (state?.activePage) {
                case 1:
                    return <TakeAwayChoice/>
                    break;
                case 2:
                    return <Categories/>
                    break;
                case 3:
                    return <Plates/>
            }
        }, [state?.activePage]
    )
    return (
        <div className={styles.container}>
            <Head>
                <title>4 You</title>
                <meta name="description" content="4 you restaurant app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Header/>
                <div className={styles.body}>
                    {Page}
                </div>

            </main>

        </div>
    )
}
