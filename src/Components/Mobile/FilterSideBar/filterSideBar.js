
import React, { useEffect,useState, Fragment } from 'react'
import classes from './filterSideBar.module.css';
import { FlatButton, RaisedButton } from '../../buttons';
import { useSelector, useDispatch } from 'react-redux';
import { SetOverlay, SetFilterSideBar } from '../../../actions/mainActions';
import axios from 'axios';
import { Filter, ComboboxContainer } from '../../../pages/Man/ShopByProduct/Filter/filter';
import SaveFilterState from '../../../actions/filtersActions';

const FilterSideBar = () => 
{
    const dispatch=useDispatch();
    const main=useSelector(s=>s.main);
    const [filters, setFilters] = useState([]);
    const [current, setCurrent] = useState(null);
   
    const [SelectedItem, setSelectedItem] = useState({});
    const state = useSelector(state=>state.filters).comboBoxes;
    useEffect(() => 
    {
   
        if(main.isFilterOpen)
         dispatch(SetOverlay(true));
        const menuName=window.location.href.slice(window.location.href.lastIndexOf('/')+1).replace('%20',' ');
        
        if(!main.currentDep.Menus)return;
        
       console.log(main.currentDep.Menus.filter(menu=>menu.Name=menuName)[0]);
       
        
         axios.get(`${process.env.REACT_APP_API}/Filters/${main.currentDep.Menus.filter(menu=>menu.Name=menuName)[0]._id}`)
        .then(result=>{
            let filters=result.data.data.Filters;
            console.log(filters);
            
            setFilters( [...filters.map((filter,index)=>
                {
                    return {
                        name:filter.name.toLowerCase(),
                        id:filter.name.toLowerCase()+Math.random()+index,
                        items:filter.items,
                        isMultiselection:!filter.isSingleSelection

                    }
                })]);
            })
        return () => {
        
        }
    }, [main.isFilterOpen,window.location.href,main.currentDep])
    const onExit=()=>
    {
        dispatch(SetOverlay(false));  
        dispatch(SetFilterSideBar(false));
    }

    const btnAction=()=>{
        if(state.find(o=>o.name==current.name) && state.find(o=>o.name==current.name).selected.length>0)
        {
            dispatch(SaveFilterState({name:current.name,selected:[]}));
        }
        else{
            dispatch(SaveFilterState({name:current.name,selected:current.items}));

        }
      
    }
   

    return (
        <div className={`${classes.main} ${main.isFilterOpen?classes.open:''} ${current && classes.sub_open}`}>
            <div>
            <div className={classes.tab_headers}>
               FILTER
               <p onClick={()=>dispatch(SaveFilterState(false))}>clear all</p>
            </div>
            <div className={classes.container}>
                 <ul>
                   {filters.map(filter=><li onClick={()=>setCurrent(filter)} key={filter.name}>
                       {filter.name}
                       <br/>
                         {state.find(o=>o.name==filter.name) && state.find(o=>o.name==filter.name).selected.length>0 && <p>{state.find(o=>o.name==filter.name).selected.map(x=>x.name).reduce((t,v)=>t+', '+v)}</p>}
                       </li>)}
                 </ul>  
                <div>
                <RaisedButton>View Items</RaisedButton>
                </div>
              <div className={`${classes.sub_menu} ${current && classes.sub_open}`}>
                  {
                  current &&     
                   <Fragment>
                    <div className={classes.tab_headers}>
                        <i onClick={()=>setCurrent(null)} className="fas fa-arrow-left"></i>
                         {current.name}
                         <button onClick={btnAction}>
                         {state.find(o=>o.name==current.name) && state.find(o=>o.name==current.name).selected.length>0?
                         <p>Clear</p>:
                         <i class="fas fa-check"><p>All</p></i>}
                         </button>  
                    </div>
                    <section>
                        {
                            <ComboboxContainer key={current.id} name={current.name} SelectedItem={SelectedItem} setSelectedItem={setSelectedItem} multiSelection={current.isMultiselection} height={null} direction={null} items={current.items} SelectedItems={state.find(o=>o.name==current.name) ?state.find(o=>o.name==current.name).selected : []} setSelectedItems={null}/>
                        })
                        <div>
                            <RaisedButton>View Items</RaisedButton>
                        </div>
                    </section>}
                     
                    </Fragment>
                    }
             
              </div>
            </div>
             
            </div>
            <i onClick={onExit} className="fas fa-times"></i>
 
        </div>
    )
}



export default FilterSideBar;
