# Materi 23 - GraphQL Mutation

## Resume

### Mutation with Apollo Client

**Mutation Insert Data with Apollo Client**

1. Import useMutation hooks from apollo client and define mutation.

   ![Define Input Query](./gambar-resume/define-insert-query.png)

2. Invoke useMutation and using array destruction define mutation handler (insertTodo) and use it.

   ![Mutation Input Query](./gambar-resume/mutation-insert-handler.png)

   refetchQueries: An array (or a function that returns an array) that specifies which queries you want to refetch after the mutation occurs.

3. Call insertTodo with variables.

   ![Call Input Query](./gambar-resume/call-input-query.png)

**Mutation Update Data with Apollo Client**

1. Define update query

   ![Define Update Query](./gambar-resume/define-update-query.png)

2. Create mutation handler for update todo

   ![Mutation Update Handler](./gambar-resume/mutation-update-handler.png)

3. Call update query

   ![Call Update Query](./gambar-resume/call-update-query.png)

**Mutation Delete Data with Apollo Client**

1. Define delete query

   ![Define Delete Query](./gambar-resume/define-delete-query.png)

2. Create mutation handler for delete todo

   ![Mutation Delete Handler](./gambar-resume/mutation-delete-handler.png)

3. Call delele query

   ![Call Delete Query](./gambar-resume/call-delete-query.png)

---

## Task

1. Dengan menggunakan project react yang telah kalian buat di task: GraphQL Query. Lakukan mutation pada project tersebut.
2. Buatlah fitur submit pada tabel pengunjung stasiun kalian.
3. Buatlah fitur delete pada tabel pengunjung stasiun kalian.
4. Buatlah fitur edit pada tabel pengunjung stasiun kalian.

### Tampilan

1. Tampilan Awal

   ![Tampilan Awal](./screenshot/tampilan-1.png)

2. Tampilan untuk Insert Passenger

   ![Tampilan Insert](./screenshot/tampilan-2.png)

3. Tampilan untuk Update Passenger

   ![Tampilan Update](./screenshot/tampilan-3.png)
