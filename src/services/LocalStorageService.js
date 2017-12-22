export class LocalStorageService {
  /**
   * @method get
   * @param {string} key Storage key name
   * @return {any}
   * @description
   * The getter will return any type of data persisted in localStorage.
   **/
  get(key) {
    const data = localStorage.getItem(key);
    return this.parse(data);
  }
  /**
   * @method set
   * @param {string} key Storage key name
   * @param {any} value Any value
   * @return {void}
   * @description
   * The setter will return any type of data persisted in localStorage.
   **/
  set(key, value) {
    localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value
    );
  }
  /**
   * @method remove
   * @param {string} key Storage key name
   * @return {void}
   * @description
   * This method will remove a localStorage item from the client.
   **/
  remove(key) {
    if (localStorage[key]) {
      localStorage.removeItem(key);
    } else {
      console.log('Trying to remove unexisting key: ', key);
    }
  }
  /**
   * @method parse
   * @param {any} value Input data expected to be JSON
   * @return {void}
   * @description
   * This method will parse the string as JSON if possible, otherwise will
   * return the value itself.
   **/
  private parse(value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

}
