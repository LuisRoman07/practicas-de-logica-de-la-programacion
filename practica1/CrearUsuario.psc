Algoritmo CrearUsuario
	Definir NombreCompleto, Correo, Contraseņa como cadenas
	
	Escribir "Porfavor ingrese su nombre completo"
	Leer NombreCompleto
	
	Escribir "Porfavor ingrese su Correo"
	Leer Correo
	
	//outlook
	//omail
	//oroton
	//mail
	
	Escribir "Porfavor ingrese su Contraseņa"
	Leer Contraseņa
	
	Si Longitud(Contraseņa) < 8 Entonces
		Escribir "La contraseņa debe ser mayor a 8 caracteres"
	SiNo
		Escribir "Usuario creado exitosamente"
		Escribir "Los datos del usuario son:"
		Escribir NombreCompleto
		Escribir Correo
		Escribir Contraseņa
	FinSi
	
FinAlgoritmo
