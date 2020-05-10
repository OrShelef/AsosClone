

exports.Ok=(text="no reason",data=null)=>{
    return {status:'ok',reason:text,data:data   };
}

exports.Not_Ok=(text="no reason")=>{
    return {status:'nok',reason:text};
}