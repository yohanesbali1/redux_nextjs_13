import { Test } from "@/store/feature/auth/auth.action";
import { AppDispatch } from "@/store/feature/configurateReducer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function () {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(Test('ini reducer'))
    }, [])
    return <>
        asd</>
}