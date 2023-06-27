import * as SecureStore from 'expo-secure-store';

export async function saveItem(key, value) {
    try {
        await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (error) {
        console.log('Erro ao persistir dados: ' + error)
    }
  console.log('Itens salvos:' + JSON.stringify(await getValueString(key)))
}

export async function getValueString(key) {
  //Ele retorna o valor em String.
  let result = null;
  try{
    result =  await SecureStore.getItemAsync(key);
    console.log("Resultado:" + result)
  }
  catch(error){
    console.log('Error ao recuperar dados ' + error)
  }
 return result;
}

export async function getValueArray(key){
 //Ele retorna o valor em Array.
 let resultString = null;
  try{
    resultString  = await getValueString(key)
  }
  catch(error){
    console.log('Erro ao transformar em array: ' + error)
  }
  return JSON.parse(resultString);
}

export async function incrementItem(key, value){
  try{
    let items = await getValueArray(key); //Retorna um array
    //Se items não forem nulos nem undefinied eles acrescenta senão salva.
    if(items !== null && items !== undefined) {
      items = [...items, value ]
      await saveItem(key, items)
    }
    else{
      saveItem(key, value)
    } 
  }
  catch(error){
    console.log('Não foi possível incrementar os dados ' + error)
  }
}

export const delItem = async (key) => {
  await SecureStore.deleteItemAsync(key);
}
