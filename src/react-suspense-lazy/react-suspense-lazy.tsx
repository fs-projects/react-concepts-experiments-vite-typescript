import { useEffect, useState } from "react";
import { ApiLoader } from "./api-loader";
import axios from "axios";

interface PhotoData {
  albumId: number;
  id: 1;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface PhotosCache {
  [key: string]: PhotoData[];
}
interface PhotosPromise {
  [key: string]: Promise<PhotoData[]>;
}
interface PhotosErrors {
  [key: string]: any;
}
const photosCache = {} as PhotosCache;
const photosPromises = {} as PhotosPromise;
const photosErrors = {} as PhotosErrors;

export function resetPhotos() {
  delete photosCache["photos"];
  delete photosPromises["photos"];
  delete photosErrors["photos"];
}

export function usePhotos() {
  if (photosCache["photos"]) {
    return photosCache["photos"];
  }
  if (photosErrors["photos"]) {
    throw photosErrors["photos"];
  }
  if (!photosPromises["photos"]) {
    photosPromises["photos"] = fetchPhotos() as Promise<PhotoData[]>;
  }
  // Throw the Promise to suspend rendering
  throw photosPromises["photos"];
}
function fetchPhotos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
          if (!res.ok) {
            // if i just return below infinite api call happens
            // new Error(`HTTP error! Status: ${res.status}`)
            // reject(new Error(`HTTP error! Status: ${res.status}`));
            
            // Both below causes this outer then to throw error that's get catched by the catch block
            // throw new Error(`HTTP error! Status: ${res.status}`)
            return Promise.reject(new Error(`HTTP error! Status: ${res.status}`));
          } else {
            return res.json();
          }
        })
        .then((data) => {
          photosCache["photos"] = data;
          delete photosPromises["photos"]; // Clean up
          resolve(data);
        })
        .catch((error) => {
          photosErrors["photos"] = error;
          delete photosPromises["photos"]; // Clean up
          reject(error);
        });
    }, 3000);
  });
}
export const PhotoLibrary = () => {
  const [count, setCount] = useState<number>(0);
  // uncomment below to see suspense in action. 
  // const photoData = usePhotos();

  // Uncomment below to see normal api call behaviour. In this case suspense isn't triggered!
  // const [photoData, setPhotoData] = useState<PhotoData[]>([]);
  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     const result =
  //       await fetch("https://jsonplaceholder.typicode.com/photos")

  //     setPhotoData(await result.json());
  //   };
  //   setTimeout(() => {
  //     fetchPhotos();
  //   }, 3000)

  //   const photos = usePhotos();
  //   setPhotoData(photos);
  // },[]);

  // using axios instead of fetch to make the call.
  const [photoData, setPhotoData] = useState<PhotoData[]>([]);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    axios
      .get<PhotoData[]>("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotoData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  
  const handleClick = () => {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      {photoData.length === 0 && <ApiLoader />}
      {error && <div style={{color: 'red', fontSize: '20px', fontWeight: "bold"}}>Some error occured{error}</div>}
      <div>{count}</div>
      <button onClick={handleClick}>Increment</button>
      {photoData?.map((photo, index) => (
        <div key={index} style={{ display: "flex" }}>
          <b style={{ marginRight: "4px" }}>{index}</b>
          <div style={{ marginBottom: "15px" }}>
            <i>{photo.title}</i>
          </div>
        </div>
      ))}
    </div>
  );
};
