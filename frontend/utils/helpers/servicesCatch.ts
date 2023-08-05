import toast from 'react-hot-toast';

export const errorCatch = (error: any) => {
  if(error.response.status === 400) {
    return toast.error(error.response.data.msg, {
      icon: "😔",
      duration: 4000,
      position: "bottom-center"
    });
  }
}