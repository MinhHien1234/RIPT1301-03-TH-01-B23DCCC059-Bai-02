var students = [
    { STT: 1, Tên: "Nguyễn Văn A",Msv:"B23DCCC001" ,Date:"29/3/2005", "Địa chỉ": "Hà Nội", SDT: "0123456789", Email: "nguyenvana@example.com", "Lớp học": "D23CQCC03-B" },
  ];
  function displayStudents() {
    var tableBody = document.getElementById('studentList');
    tableBody.innerHTML = '';
    students.forEach(function(student, index) {
      var row = `<tr>
                  <td>${student.STT}</td>
                  <td>${student['Tên']}</td>
                  <td>${student['Msv']}</td>
                  <td>${student['Date']}</td>
                  <td>${student['Địa chỉ']}</td>
                  <td>${student['SDT']}</td>
                  <td>${student['Email']}</td>
                  <td>${student['Lớp học']}</td>
                </tr>`;
      tableBody.insertAdjacentHTML('beforeend', row);
    });
  }
  displayStudents();