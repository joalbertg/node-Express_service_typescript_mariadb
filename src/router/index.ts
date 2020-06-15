import { Router, Request, Response } from 'express';
import { MariaDB } from '../mariadb';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
  const query = 'SELECT * FROM heroes';

  MariaDB.executeQuery(query)
    .then(heroes => res.json({
      ok: true,
      heroes
    }))
    .catch(error => res.status(400).json({
      ok: false,
      error
    }));
});

router.get('/heroes/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const query = `SELECT * FROM heroes WHERE id = ${id}`;

  MariaDB.executeQuery(query)
    .then(heroe => res.json({
      ok: true,
      heroe
    }))
    .catch(error => res.status(400).json({
      ok: false,
      error
    }));
});

export default router;

