import MangaCard from "../other/MangaCard";
import { useAppDispatch, useAppSelector } from "../hook";
import { useEffect } from "react";
import { getUserVault } from "../manga/mangaSlice";
import { RootState } from "../store";
import { Manga } from "../types/manga";

const Vault = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUserVault());
    },[dispatch])
    const mangaVaultItems = useAppSelector((state) => state.manga.mangaList) as Manga[];
    return(
        <div className="row">
            {mangaVaultItems?.map((manga, key) => (

                <MangaCard name={manga.name} price={manga.price} key={key} /> 
            ))}       
            </div>
        )
}

export default Vault;


