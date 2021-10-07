import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin: 100px;
    padding: 20px;
    border-width: 2px;
    border-style: solid;
    
`
const Profile = styled.div`
    display: flex;
    flex-direction: column;
`
const ProfileImage = styled.img`
    width: 200px;
`
const ButtonAlignment = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas-lopes-johnson/person"
    const urlChoose = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas-lopes-johnson/choose-person"
    
    useEffect(() =>{
        getprofile()
    },[])

    const getprofile = () => {
        axios.get(url)
        .then((res)=>{
            setProfile(res.data.profile)
        })
        .catch((err) =>{
            console.log(err.response)
        })
    }


    
    const choosePerfil = () =>{
        axios.post(`${url}/choose-person`)
        .then((res)=>{
            getprofile()
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }


    return (
        <HomeContainer>
            <Profile>
                <ProfileImage src={profile.photo} />
                <h2>{profile.name}, {profile.age}</h2>
                <p> {profile.bio}</p>
            </Profile>
            <ButtonAlignment>
                <button onClick={() => choosePerfil(true)}>X</button>
                <button onClick={() => choosePerfil(false)}>V</button>  
            </ButtonAlignment>            
        </HomeContainer>
    )
}