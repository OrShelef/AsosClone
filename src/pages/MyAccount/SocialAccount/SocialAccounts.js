
import React,{useEffect,useState} from 'react'
import classes from './SocialAccounts.module.css';
import MyAccountHeader from '../Header/MyAccountHeader';
import {OutlineButton} from '../../../Components/buttons';
const SocialAccounts = (props) => 
{
    const items=[
    {
        name:'Facebook',
        image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InRyYW5zcGFyZW50IiBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI2LjU3MyAyMS4wNjd2LTIuOTA2YzAtMS4wOTIuNzIyLTEuMzQ2IDEuMjMtMS4zNDZoMy4xMjV2LTQuNzk3TDI2LjYyNiAxMmMtNC43NzcgMC01Ljg2NCAzLjU3OC01Ljg2NCA1Ljg3djMuMTk3SDE4djQuOTQ0aDIuNzYyVjQwaDUuODExVjI2LjAxaDMuOTJMMzEgMjEuMDY4aC00LjQyNyIvPjwvZz48L3N2Zz4=',
        isConnected:false,
        userName:'ori shelef',
        bg:'rgb(59, 89, 152)'
    },
    {
        name:'Google',
        image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgdmlld0JveD0iMCAwIDQyIDQyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM0Mjg1RjQiIGQ9Ik0yOS42NCAyMS4yMDRjMC0uNjM4LS4wNTctMS4yNTEtLjE2NC0xLjg0SDIxdjMuNDgxaDQuODQ0YTQuMTQgNC4xNCAwIDAxLTEuNzk2IDIuNzE2djIuMjU5aDIuOTA4YzEuNzAyLTEuNTY3IDIuNjg0LTMuODc1IDIuNjg0LTYuNjE2eiIvPjxwYXRoIGZpbGw9IiMzNGE4NTMiIGQ9Ik0yMSAzMGMyLjQzIDAgNC40NjctLjgwNiA1Ljk1Ni0yLjE4bC0yLjkwOC0yLjI1OWMtLjgwNi41NC0xLjgzNy44Ni0zLjA0OC44Ni0yLjM0NCAwLTQuMzI4LTEuNTg0LTUuMDM2LTMuNzExaC0zLjAwN3YyLjMzMkE4Ljk5NiA4Ljk5NiAwIDAwMjEgMzB6Ii8+PHBhdGggZmlsbD0iI2ZiYmMwNSIgZD0iTTE1Ljk2NCAyMi43MWE1LjQxIDUuNDEgMCAwMS0uMjgyLTEuNzFjMC0uNTkzLjEwMi0xLjE3LjI4Mi0xLjcxdi0yLjMzMmgtMy4wMDdBOC45OTYgOC45OTYgMCAwMDEyIDIxYzAgMS40NTIuMzQ4IDIuODI3Ljk1NyA0LjA0MmwzLjAwNy0yLjMzMnoiLz48cGF0aCBmaWxsPSIjZWE0MzM1IiBkPSJNMjEgMTUuNThjMS4zMjEgMCAyLjUwOC40NTQgMy40NCAxLjM0NWwyLjU4Mi0yLjU4QzI1LjQ2MyAxMi44OTEgMjMuNDI2IDEyIDIxIDEyYTguOTk2IDguOTk2IDAgMDAtOC4wNDMgNC45NThsMy4wMDcgMi4zMzJjLjcwOC0yLjEyNyAyLjY5Mi0zLjcxIDUuMDM2LTMuNzF6Ii8+PC9nPjwvc3ZnPg==',
        isConnected:false,
        userName:'',
    },
    {
        name:'Twitter',
        image:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InRyYW5zcGFyZW50IiBkPSJNMCAwaDQwdjQwSDB6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI4Ljk3NyAxNC4yODZjLS42NS4zMDgtMS4zNC41MDgtMi4wNzIuNmEzLjc5MiAzLjc5MiAwIDAwMS41ODktMi4xMDUgNy4zMDMgNy4zMDMgMCAwMS0yLjI5My45MjcgMy41IDMuNSAwIDAwLTIuNjI3LTEuMjA4Yy0xLjk5IDAtMy42MDIgMS43MDQtMy42MDIgMy44MTEgMCAuMjk2LjAzLjU4OC4wOS44NjQtMi45ODgtLjE1Mi01LjY0Ni0xLjY3NS03LjQyNC0zLjk3NWEzLjk2NiAzLjk2NiAwIDAwLS40ODUgMS45MTVjMCAxLjMxOS42MzUgMi40OTIgMS42MDMgMy4xNjZhMy40NTMgMy40NTMgMCAwMS0xLjYzMi0uNDc0di4wNTJjMCAxLjg0MyAxLjI0MiAzLjM4IDIuODkgMy43MzZhMy40NDUgMy40NDUgMCAwMS0uOTUyLjEyNyAyLjkxIDIuOTEgMCAwMS0uNjc0LS4wNjljLjQ1NyAxLjUyIDEuNzg4IDIuNjI0IDMuMzY0IDIuNjQ2YTYuOTUyIDYuOTUyIDAgMDEtNS4zMzQgMS41NzcgOS43NTMgOS43NTMgMCAwMDUuNTIzIDEuNzJjNi42MjUgMCAxMC4yNS01LjgwOSAxMC4yNS0xMC44NDQgMC0uMTYtLjAwNC0uMzI0LS4wMTItLjQ4N2E3Ljc1NSA3Ljc1NSAwIDAwMS43OTgtMS45OCIvPjwvZz48L3N2Zz4=',
        isConnected:false,
        userName:'',
        bg:'rgb(221, 221, 221)'
    }]

    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return(<div className={`${classes.main} col`}>
        <MyAccountHeader icon={props.icon} header={props.name}>
        <p >Use your social media accounts to make it even easier to log in.</p>
        </MyAccountHeader>
   <ul>
       {items.map((item,index)=><SocialAccountItem 
       key={index} 
       name={item.name} 
       image={item.image} 
       isConnected={item.isConnected}
       userName={item.userName}
       bg={item.bg}/>)}
   </ul>
    </div>)
}

const SocialAccountItem=(props)=>
{
    return(
        <li className={classes.list_item}>
            <img src={props.image} style={{backgroundColor:props.bg && props.bg}}/>
            <div className="col">
             <div className="row">
             <h1>{props.name}</h1>
                <span className="space"/>
                <OutlineButton className={classes.socialButton} width="12rem" color="invert">{props.isConnected?'DISCONNECT':'CONNECT'}</OutlineButton>
             </div>
             <span className={classes.hr}/>
             {props.userName!=''&&  <p>{props.userName}</p>}
            </div>
        
        </li>
    )
}

export default SocialAccounts
