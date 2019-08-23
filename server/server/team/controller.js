import Team from './team';

export const createTeamOrClick = async (req, res) => {
  const { teamName } = req.body;
  const filter = { teamName };
  const update = { $inc: { teamClicks: 1 } };
  console.log(req.body);
  console.log(req.body.teamName);

  if (!teamName) {
    return res.status(401).json({ error: true, message: 'Missing teamName.' });
  }

  Team.findOneAndUpdate(filter, update, { upsert: true, new: true }, function(
    err,
    doc
  ) {
    if (err) {
      return res.status(err.status).json({
        error: true,
        message: 'Error in creating or adding click in team.',
      });
    }
    return res.status(201).json({
      team: doc,
    });
  });
};

export const getAllTeam = async (req, res) => {
  try {
    return res.status(200).json({ teams: await Team.find({}) });
  } catch (e) {
    return res.status(e.status).json({
      error: true,
      message: 'Fail during finding teams ',
    });
  }
};
