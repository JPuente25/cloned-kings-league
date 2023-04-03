export interface Person {
   name: string;
   image: string;
}

export interface Player extends Person {
   role: string;
}

export interface TeamsData {
   name: string;
   logo: string;
   background: string;
   logo_svg: string;
   win: number;
   loss: number;
   goals: number;
   received_goals: number;
   assists: number;
   yellow_cards: number;
   red_cards: number;
   president: Person;
   trainer: Person;
   players: Array<Player>;
   key: string;
}

export interface GameData {
   team_a_red: string;
   team_a: string;
   logo_a: string;
   team_b: string;
   team_b_red: string;
   logo_b: string;
   time?: string;
   goals_a?: number;
   goals_b?: number;
   penalti_a?: number;
   penalti_b?: number;
}

export interface GamesProps {
   week: number;
   date: string;
   played: boolean;
   results: Array<GameData>;
}

export interface PlayerProps {
   logo: string;
   background: string;
   team: string;
   player: string;
   player_img: string;
   played_games: number;
}

export interface AssistsProps extends PlayerProps {
   assists: number;
}

export interface GoalsProps extends PlayerProps {
   goals: number;
}

export interface MvpProps extends PlayerProps {
   mvp_games: number;
}

export interface BestPlayerProps extends PlayerProps {
   goals?: number;
   assists?: number;
   mvp_games?: number;
}

export interface VideoProps {
   key: string;
}

export interface Player12Props {
   player_img: string;
   background: string;
   team: string;
   team_logo: string;
   player: string;
   role: string;
   week: Array<number>;
}

export interface WeeksProps {
   weeks_played: number;
   weeks_total: number;
}

export interface DraftPlayer {
   id: string;
   name: string;
   role: string;
   age: number;
   foot: string;
   height: number;
   weight: number;
   physical: number;
   speed: number;
   shoot: number;
   skill: number;
   pass: number;
   defense: number;
   img: string;
}

export interface DraftGoalkeeper {
   id: string;
   name: string;
   role: string;
   age: number;
   foot: string;
   height: number;
   weight: number;
   reflex: number;
   block: number;
   kick: number;
   stretch: number;
   img: string;
}

export interface RangeValues {
   min: number;
   max: number;
}
