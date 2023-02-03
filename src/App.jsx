import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import CardPost from './components/CardPost';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [postList, setPostList] = useState(null);
  const [filter, setFilter] = useState('');
  const [filterUserId, setFilterUserId] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPostList(data));
  }, []);

  const filteredPostList = postList
    ? postList.filter(
        post =>
          (post.body.toLowerCase().includes(filter.toLowerCase())) &&
          (filterUserId === '' || post.userId === Number(filterUserId))
      )
    : null;

  const sortedPostList = filteredPostList
    ? filteredPostList.sort((a, b) => {
        if (sort === 'asc') {
          return a.title.localeCompare(b.title);
        } else if (sort === 'desc') {
          return b.title.localeCompare(a.title);
        } else {
          return 0;
        }
      })
    : null;
  return postList ? (
    <div>
      <Form>
        <Form.Group className='mb-3' controlId='formBodyFilter'>
          <Form.Label>Buscar en el cuerpo</Form.Label>
          <Form.Control type='text' placeholder='Ingrese el texto a buscar'
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formIdFilter'>
          <Form.Label>Filtar por usuario</Form.Label>
          <Form.Control type='number' placeholder='Ingrese el id a filtrar'
            value={filterUserId}
            onChange={e => setFilterUserId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formsort'>
        <Form.Label>Ordenar por titulo</Form.Label>
          <Form.Select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="">No ordenar</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Container fluid='sd'>
        <Row xs={1} md={4}>
          {sortedPostList.map(post => (
            <CardPost key={post.id} {...post} />
          ))}
        </Row>
      </Container>
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default App;