export const deepCopySubject = <T>(subject: T): T => {
   const isObject = (element: any) => (
      typeof element === 'object' && !Array.isArray(element) && element !== null
   );

   let copySubject: any;

   const subjectIsArray = Array.isArray(subject);
   const subjectIsObject = isObject(subject);
   
   if (subjectIsArray) {
      copySubject = [];
   } else if (subjectIsObject) {
      copySubject = {};
   } else {
      return subject;
   }

   for (const key in subject) {
      const keyIsObject = isObject(subject[key]);

      if (keyIsObject) {
         copySubject[key] = deepCopySubject(subject[key]);
      } else {
         if (subjectIsArray) {
            copySubject.push(subject[key]);
         } else {
            copySubject[key] = subject[key];
         }
      }
   }
   
   return copySubject;
}