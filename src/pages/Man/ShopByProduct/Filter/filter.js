import React,{useState,useRef,useEffect, Fragment} from 'react'
import classes from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import SaveFilterState from '../../../../actions/filtersActions';
import axios from 'axios';
import path from 'path';
import RangeSlider from '../../../../Components/RangeSlider/rangeSlider';
import { SetFilterSideBar } from '../../../../actions/mainActions';

const Filter=({name,items,multiSelection=false})=>
{
    const [SelectedItems, setSelectedItems] = useState([]);
    const [SelectedItem, setSelectedItem] = useState({});
    const state = useSelector(state=>state.filters).comboBoxes;

    useEffect(() => {
       const exist = state.filter(obj=>obj.name==name)[0];
      
       if(exist && exist.selected)
        {
          
            if(multiSelection)
            {
                setSelectedItems(exist.selected);
            }
            else{
                setSelectedItem(exist.selected[0]);
            }
        }

        return () => {
           
        }
    },[])

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const useOutsideAlerter=(ref)=> {
        useEffect(() => {
        
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) 
            {
             setIsOpen(false);
              
            }
          }
          function updateWindowDimensions(event){
            setWindowSize(window.innerWidth);
            
            
          }
          window.addEventListener("resize", updateWindowDimensions);
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            window.removeEventListener("resize", updateWindowDimensions);
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    

    useOutsideAlerter(wrapperRef);
    const [isOpen, setIsOpen] = useState(false);
   
    
    const dir=wrapperRef.current && (wrapperRef.current.getBoundingClientRect().left+400<windowSize?-1:wrapperRef.current.getBoundingClientRect().width/2+25);
    const height=wrapperRef.current ? (window.innerHeight-wrapperRef.current.getBoundingClientRect().top-wrapperRef.current.getBoundingClientRect().height*3):300;
    const isEmpty=multiSelection?(SelectedItems.length>0 && classes.not_empty):(SelectedItem.name && SelectedItem.name!=items[0].name ? classes.not_empty:'')
    return(
       <div ref={wrapperRef} className={classes.comboBoxContainer}>
           <button  onClick={()=>setIsOpen(!isOpen)} className={`${classes.comboBox} ${isOpen && classes.active} ${isEmpty}`}>      
           <p>{name}</p>
           <i className="fas fa-chevron-down"></i>
           
           </button>
           {isOpen && <ComboboxContainer name={name} SelectedItem={SelectedItem} setSelectedItem={setSelectedItem} multiSelection={multiSelection} height={height} direction={dir} items={items} SelectedItems={SelectedItems} setSelectedItems={setSelectedItems}/>}
       </div>
    )

    
}


const ComboboxContainer = ({items=[],SelectedItems,setSelectedItems,direction,height,multiSelection,SelectedItem,setSelectedItem,name}) =>{

   
    const btnName=SelectedItems.length>0?<p>Clear</p>:<i class="fas fa-check"><p>All</p></i>;
    const dispatch=useDispatch();

    const selectedItemHandler = (index) =>
    {
       setTimeout(() => {
           
        dispatch(SaveFilterState({name,selected:[{...items[index]}]}))
     
       }, 0)
          
        setSelectedItem({...items[index]})
      
    }

    const itemClickedHandler= (index) => {

        const selectedItems=[...SelectedItems];

       
        if(selectedItems.find(item=>item.name==items[index].name))
        {
            selectedItems.splice(selectedItems.findIndex(x=>x.name==items[index].name),1);
          
            if(setSelectedItems)
                 setSelectedItems(prevstate=>[...selectedItems]);
        }
        else
          {  
            selectedItems.push(items[index]);
            if(setSelectedItems)
             setSelectedItems(prevstate=>[...selectedItems]);
          }
        
        dispatch(SaveFilterState({name,selected:[...selectedItems]}))
    
            
            

    }
    

    const btnAction=()=>{
        if(SelectedItems.length>0)
        {
            setSelectedItems([]);
        }
        else{
            setSelectedItems(items);
        }
      
    }
   
   
    
    if(name.includes("price"))
    {
        return (  <div   className={classes.container} style={{left: direction && direction>-1?`${-direction}px`:'0',minHeight:'300px'}}>
            <div>
                <div>
                     <p>{SelectedItems.length} selected</p>
                     {SelectedItems.length>0 && <p>{SelectedItems.map(x=>x.name).reduce((t,v)=>t+', '+v)}</p>}
                </div>
              
                <button onClick={btnAction}>{btnName}</button>
            </div>

           <RangeSlider/>
        </div>
      );
    }
    if(multiSelection)
    {
      return (  <div   className={classes.container} style={{left: direction && direction>-1?`${-direction}px`:'0',minHeight:'300px'}}>
            <div>
                <div>
                     <p>{SelectedItems.length} selected</p>
                     {SelectedItems.length>0 && <p>{SelectedItems.map(x=>x.name).reduce((t,v)=>t+', '+v)}</p>}
                </div>
              
                <button onClick={btnAction}>{btnName}</button>
            </div>

            <ul style={{height:height&&(`${height}px`),minHeight:'300px'}}>
                {items.map((item,index)=><ComboboxItem selected={SelectedItems.find(x=>x.id==item.id)} clicked={()=>itemClickedHandler(index)} name={item.name} count={item.count} />)}
            </ul>
        </div>
      );
    } 
   else
   {
     
       
    return (
        <div  className={classes.container} style={{left: direction && direction>-1?`${-direction}px`:'0'}}>
             <ul style={{height:`${height}px`,minHeight:'300px'}}>
                {items.map((item,index)=><RadioButtonItem selected={SelectedItem.name==item.name} clicked={()=>selectedItemHandler(index)} name={item.name} count={item.count} />)}
            </ul>
        </div>
    )
   }
   
}

const ComboboxItem = props=> {

    const name = props.name;
    const count =  ` (${props.count})`;
    return (
        <li  onClick={props.clicked} className={`${classes.combobox_item} ${props.selected && classes.selected}`}>
            <span>{name}<p>{count}</p></span>
        </li>
    );
}

const RadioButtonItem = props => {
    const name = props.name;
    
    
    return (
        <li  onClick={props.clicked} className={`${classes.radio_button} ${props.selected?  classes.selected:''}`}>
            <span>{name}</span>
            <div className={classes.radio}>
                <span/>
            </div>
        </li>
    )
}

const Filters=(props)=>{


   const main =useSelector(s=>s.main);
   const dispatch=useDispatch();
   const [filters, setFilters] = useState([])
   
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/Filters/${props.depName}`)
        .then(result=>{
            setFilters( [...result.data.map(filter=>
                {
                    return {
                        name:filter.name.toLowerCase(),
                        id:filter.id,
                        items:filter.facetValues,
                        isMultiselection:filter.facetType=='TextMultiSelect'

                    }
                })])
  
            
        })
        return () => {
            
        }
    }, [])
 
    return(
        <Fragment>

        <div className={classes.main_mobile}>
            <div>
                <label>SORT</label>
            <select >
                <option value="SORT">SORT</option>
                <option value="SORT">SORT</option>
                <option value="SORT">SORT</option>
                <option value="SORT">SORT</option>
            </select>
            </div>
           
          
            <button onClick={()=>dispatch(SetFilterSideBar(true))}>FILTER</button>
        </div>
        <div className={classes.main}>
            {filters.map(filter=><Filter key={filter.id} multiSelection={filter.isMultiselection} items ={filter.items} name={filter.name}/>)}
        </div>
        </Fragment>
            )
}

export { Filters,Filter,ComboboxContainer}