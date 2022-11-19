import {useState, useEffect} from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const useRequestDelay = (delayTime = 1000, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(initialData);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  function updateRecord(recordUpdate, doneCallBack) {
    const originalRecords = [...data];
    /* const recPrev = data.find(rec => {
      return rec.id === id;
    });

    const recUpdate = {
      ...recPrev,
      favorite: !recPrev.favorite,
    }; */

    const newRecords = data.map(rec => {
      return rec.id === recordUpdate.id ? recordUpdate : rec;
    });
    async function delayFunction() {
      try {
        setData(newRecords);
        await delay(delayTime);
        if (doneCallBack) {
          doneCallBack();
        }
      } catch (error) {
        console.log("error throw inside delayFunction", error);
        if (doneCallBack) {
          doneCallBack();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }
  function insertRecord(record, doneCallBack) {
    const originalRecords = [...data];

    const newRecords = [record, ...data];
    async function delayFunction() {
      try {
        setData(newRecords);
        await delay(delayTime);
        if (doneCallBack) {
          doneCallBack();
        }
      } catch (error) {
        console.log("error throw inside delayFunction", error);
        if (doneCallBack) {
          doneCallBack();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }
  function deleteRecord(record, doneCallBack) {
    const originalRecords = [...data];

    const newRecords = data.filter(function (rec) {
      return rec.id !== record.id;
    });

    async function delayFunction() {
      try {
        setData(newRecords);
        await delay(delayTime);
        if (doneCallBack) {
          doneCallBack();
        }
      } catch (error) {
        console.log("error throw inside delayFunction", error);
        if (doneCallBack) {
          doneCallBack();
        }
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  };
};
export default useRequestDelay;
