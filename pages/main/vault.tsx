import MangaCard from "../other/MangaCard";
import { UseSelector } from "react-redux";
import { getUserVault } from "../manga/mangaSlice";
import { useEffect } from "react";

const Vault = () => {
    useEffect(() => {
        getUserVault();
    },[])
    return(
        <div className="row">

        </div>
    )
}

export default Vault;