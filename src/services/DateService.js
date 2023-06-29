import * as SecureStore from 'expo-secure-store';

export async function saveItem(key, value) {
  try {
    //Pega o valor do storage
    let hasValue = await getValueFor(key);

    let storage
    //Se não existir, cria um array novo
    //Se existir transforma em obj
    if(hasValue === null || hasValue === undefined){
      storage = []
    }
    else{
      storage = JSON.parse(hasValue)
    }

    let novoStorage
    //Evita repetição. Se Tiver tira, se não tiver bota
    if (storage?.includes(value)) {
      let index = storage.indexOf(value);
      if(index !== null || index !== undefined || index > -1){
        novoStorage = storage.filter(item => {
          return item !== value
        })
      }
      else{
        return
      }
    }else{
      novoStorage = [...storage, value];;
    }

    await SecureStore.setItemAsync(key, JSON.stringify(novoStorage));
    console.log('Ids ' + key + await getValueFor(key))

  } catch (error) {
    console.log("Erro ao persistir dados:" + error);
  }

}
export async function overwriteItem(key, value){
    try {
      await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (error) {
      console.log("Erro ao persistir dados:" + error);
    }
    console.log('Itens salvos:' + JSON.stringify(await getValueFor(key)))
}

export async function getValueFor(key) {
  let result = null;

  try {
    result = await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Erro ao recuperar dados:" + error);
  }
  return result;
}



export const delItem = async (key) => {
  await SecureStore.deleteItemAsync(key);
}
