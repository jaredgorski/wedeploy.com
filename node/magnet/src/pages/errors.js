import path from 'path';
import express from 'express';

export const controller = app => {
  const electricPath = path.join(__dirname, '..', '..', '..', '..', 'electric');

  app.use((err, req, res, next) => {
    res.status(500);
    res.sendFile(path.join(electricPath, 'error/server-err.html'));
  });
}
