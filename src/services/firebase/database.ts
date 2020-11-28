import database from '@react-native-firebase/database';

export const FBDatabaseFactory = () => {
  const node = '/news';

  interface addNewInterface {
    title: string;
    description: string;
    text: string;
  }

  interface updateNewInterface {
    id: Date;
    title?: string;
    description?: string;
    text?: string;
  }

  interface removeNewInterface {
    id: Date;
  }

  const addNew = ({title, description, text}: addNewInterface) => {
    const id = new Date();

    database()
      .ref(`${node}/${id}`)
      .set({
        id,
        title,
        description,
        text,
      })
      .then(() => console.log('Note added successfully'))
      .catch((e) => console.error('Error while adding new: ', e));
  };

  const updateNew = ({id, title, description, text}: updateNewInterface) => {
    database()
      .ref(`${node}/${id}`)
      .update({
        title,
        description,
        text,
      })
      .then(() => console.log(`The new (${id}) is updated`))
      .catch((e) => console.error('Error while updating: ', e));
  };

  const readNews = async () => {
    const result = await database()
      .ref(`${node}`)
      .once('value')
      .then((snapshot) => snapshot.val());

    return result;
  };

  const removeNew = async ({id}: removeNewInterface) => {
    await database().ref(`${node}${id}`).remove();
  };

  return Object.freeze({database, addNew, readNews, removeNew, updateNew});
};
