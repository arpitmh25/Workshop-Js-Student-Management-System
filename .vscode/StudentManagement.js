//UC 1&2: Add the student data in student management system and display details.
const studentData = [
    {rollNo: 1, firstName:'Anna', lastName: 'Naman', address:'KacchiKholi', physicsMarks: 60, chemistryMarks:70,mathMarks:90},
    {rollNo: 2, firstName:'Tanna',lastName: 'Aman', address:'Sindhi Camp', physicsMarks:50, chemistryMarks:60,mathMarks:80},
    {rollNo: 3, firstName:'Panaa',lastName: 'Raman',address:'Narayan Baug', physicsMarks:40, chemistryMarks:30,mathMarks:49},
    ];


console.log('Adding student data and displaying it ',studentData);
//UC3 : Use hashmap to store the student data.
    const map = new Map()

    map.set(1, { firstName:'Aditya', lastName: 'Pandit', address:'Kacchi Kholi', physicsMarks: 60, chemistryMarks:70,mathMarks:80});
    map.set(2, { firstName:'Akash', lastName: 'Lole', address:'East Street', physicsMarks: 60, chemistryMarks:50,mathMarks:70});
    map.set(3, { firstName:'Mangesh', lastName: 'Builder', address:'West Street', physicsMarks: 55, chemistryMarks:60,mathMarks:60});
    map.set(4, { firstName:'Shubham', lastName: 'Sabnavis', address:'North Street', physicsMarks: 35, chemistryMarks:95,mathMarks:49});
    map.set(5, { firstName:'Tejas', lastName: 'Pathke', address:'South Street', physicsMarks: 80, chemistryMarks:40,mathMarks:40});
    map.set(6, { firstName:'Akshay', lastName: 'Dande', address:'Southeast Street', physicsMarks: 90, chemistryMarks:60,mathMarks:30});
    map.set(7, { firstName:'Anna', lastName: 'Lankesh', address:'Kacchi Kholi', physicsMarks: 60, chemistryMarks:70 , mathMarks:90});
    map.set(8, { firstName:'Tanna',lastName: 'Aman', address:'Sindhi Camp', physicsMarks:50, chemistryMarks:60  ,  mathMarks:80});

//UC4 : Filter out the student based on marks.
    map.forEach(function(value, key){
    console.log(key + ' = ' + JSON.stringify(value))
    if(value.mathMarks < 50) {
    console.log(value.mathMarks,'Filtering out students who got less than 50 marks in maths :-')
    }})
       
//UC5 : Edit the student data.

    var editStudentDetails = map.get(1)
    editStudentDetails.firstName = 'Gunjan'
    editStudentDetails.address = 'New york streets'
    console.log(editStudentDetails)
  
    var editStudentDetails = map.get(8)
    editStudentDetails.firstName = 'AlluArjun'
    editStudentDetails.address = 'Washington Dc'
    console.log(editStudentDetails)
  
    console.log(map , "Edited Student Details as needed")
