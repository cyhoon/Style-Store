export default(() => {
  const st = localStorage || {};

  return {
    set: (key: string, object: any) => {
      st[key] = (typeof object) === 'string' ? object: JSON.stringify(object);
    },
    get: (key: string) => {
      if (!st[key]) {
        return null;
      }

      const value = st[key];

      try {
        const parsed = JSON.parse(value);
        return parsed;
      } catch (error) {
        return value;
      }
    },
    remove: (key: string) => {
      if (localStorage) {
        return localStorage.removeItem(key);
      }

      delete st[key];
    }
  }
})();