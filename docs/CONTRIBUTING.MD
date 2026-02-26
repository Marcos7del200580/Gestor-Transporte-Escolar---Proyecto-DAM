# 🤝 Guía de Contribución

Este documento define las normas para trabajar en este repositorio.

---

## 🌿 Estrategia de Ramas

No se crean ramas por backend o frontend.

Las ramas se crean por funcionalidad o corrección.

Formato:

```
feature/nombre-funcionalidad
bugfix/nombre-error
hotfix/nombre-fix-urgente
```

Ejemplos:

```
feature/login
feature/user-profile
bugfix/token-error
```

Siempre crear ramas desde `main`.

---

## 🔁 Flujo de Trabajo

1. Actualizar `main`

```
git checkout main
git pull
```

2. Crear nueva rama

```
git checkout -b feature/nueva-funcionalidad
```

3. Trabajar en el código

4. Hacer commits pequeños

5. Subir la rama

```
git push origin feature/nueva-funcionalidad
```

6. Crear Pull Request en GitHub

---

## 🔍 Revisión Obligatoria

🚨 Está prohibido subir cambios directamente a `main`.

Nunca hacer:

```
git push origin main
```

Todos los cambios deben pasar por:

* Pull Request
* Revisión de otro miembro del equipo

Solo después de aprobación podrá fusionarse a `main`.

Esto evita errores y protege producción.

---

## 🧪 Antes de aprobar un Pull Request se debe comprobar:

* Que el código funciona
* Que no rompe otras partes
* Que sigue la arquitectura del proyecto
* Que los nombres son claros
* Que no hay código innecesario

---

## 📝 Normas de Commits

Formato:

```
tipo: descripción corta
```

Tipos permitidos:

* feat → nueva funcionalidad
* fix → corrección de errores
* docs → documentación
* refactor → mejora interna
* style → cambios visuales
* test → pruebas

Ejemplos:

```
feat: añadir login
fix: corregir validación de email
docs: actualizar readme backend
```

---

## ✂️ Commits Pequeños

Se recomienda hacer commits pequeños y específicos.

✔️ Fácil revisión
✔️ Fácil detectar errores
✔️ Fácil revertir cambios

Ejemplo correcto:

```
feat: crear endpoint login
feat: añadir validación password
fix: corregir respuesta del login
```

❌ Evitar commits grandes como:

```
feat: login completo terminado
```

---

## 📦 Estructura del Proyecto

* Backend → `/backend`
* Frontend → `/frontend`

Nunca crear ramas llamadas:

```
backend
frontend
```

---

## 🎯 Objetivo

Mantener:

* Código limpio
* Cambios revisados
* Producción estable

