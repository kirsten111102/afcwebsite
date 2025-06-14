--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Homebrew)
-- Dumped by pg_dump version 14.18 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Chairman; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."Chairman" (
    id integer NOT NULL,
    name text NOT NULL,
    age integer NOT NULL,
    team_id text NOT NULL
);


ALTER TABLE public."Chairman" OWNER TO kirasuo02;

--
-- Name: Chairman_id_seq; Type: SEQUENCE; Schema: public; Owner: kirasuo02
--

CREATE SEQUENCE public."Chairman_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Chairman_id_seq" OWNER TO kirasuo02;

--
-- Name: Chairman_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kirasuo02
--

ALTER SEQUENCE public."Chairman_id_seq" OWNED BY public."Chairman".id;


--
-- Name: Employee; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."Employee" (
    id integer NOT NULL,
    name text NOT NULL,
    age integer NOT NULL,
    "position" text NOT NULL,
    team_id text NOT NULL
);


ALTER TABLE public."Employee" OWNER TO kirasuo02;

--
-- Name: Employee_id_seq; Type: SEQUENCE; Schema: public; Owner: kirasuo02
--

CREATE SEQUENCE public."Employee_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Employee_id_seq" OWNER TO kirasuo02;

--
-- Name: Employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kirasuo02
--

ALTER SEQUENCE public."Employee_id_seq" OWNED BY public."Employee".id;


--
-- Name: Is_Participant; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."Is_Participant" (
    team_id text NOT NULL,
    is_participant boolean NOT NULL
);


ALTER TABLE public."Is_Participant" OWNER TO kirasuo02;

--
-- Name: Leagues; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."Leagues" (
    id text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Leagues" OWNER TO kirasuo02;

--
-- Name: PersonalAchievements; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."PersonalAchievements" (
    id text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."PersonalAchievements" OWNER TO kirasuo02;

--
-- Name: PlayerInfo; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."PlayerInfo" (
    player_id text NOT NULL,
    dob date NOT NULL,
    birthplace text NOT NULL,
    gender text NOT NULL,
    biography text NOT NULL,
    height integer NOT NULL
);


ALTER TABLE public."PlayerInfo" OWNER TO kirasuo02;

--
-- Name: PlayerPersonalAchievements; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."PlayerPersonalAchievements" (
    player_id text NOT NULL,
    achievement_id text NOT NULL,
    team_id text NOT NULL,
    id text NOT NULL,
    league_id text NOT NULL,
    "time" text NOT NULL
);


ALTER TABLE public."PlayerPersonalAchievements" OWNER TO kirasuo02;

--
-- Name: PlayerRatings; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."PlayerRatings" (
    player_id text NOT NULL,
    pace integer NOT NULL,
    shooting integer NOT NULL,
    passing integer NOT NULL,
    physical integer NOT NULL,
    defending integer NOT NULL,
    dribbling integer NOT NULL
);


ALTER TABLE public."PlayerRatings" OWNER TO kirasuo02;

--
-- Name: PlayerStats; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."PlayerStats" (
    player_id text NOT NULL,
    matches integer NOT NULL,
    goals integer NOT NULL,
    assists integer NOT NULL,
    yellow_cards integer NOT NULL,
    red_cards integer NOT NULL,
    id text NOT NULL,
    league_id text NOT NULL,
    year integer NOT NULL,
    team_id text NOT NULL
);


ALTER TABLE public."PlayerStats" OWNER TO kirasuo02;

--
-- Name: PlayerTeamAchievements; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."PlayerTeamAchievements" (
    id text NOT NULL,
    player_id text NOT NULL,
    place text NOT NULL,
    league_id text NOT NULL,
    team_id text NOT NULL,
    "time" text NOT NULL
);


ALTER TABLE public."PlayerTeamAchievements" OWNER TO kirasuo02;

--
-- Name: PlayerTeammateThoughts; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."PlayerTeammateThoughts" (
    id integer NOT NULL,
    player_id text NOT NULL,
    thoughts text NOT NULL,
    sent_to text NOT NULL
);


ALTER TABLE public."PlayerTeammateThoughts" OWNER TO kirasuo02;

--
-- Name: PlayerTeammateThoughts_id_seq; Type: SEQUENCE; Schema: public; Owner: kirasuo02
--

CREATE SEQUENCE public."PlayerTeammateThoughts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PlayerTeammateThoughts_id_seq" OWNER TO kirasuo02;

--
-- Name: PlayerTeammateThoughts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kirasuo02
--

ALTER SEQUENCE public."PlayerTeammateThoughts_id_seq" OWNED BY public."PlayerTeammateThoughts".id;


--
-- Name: Players; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."Players" (
    id text NOT NULL,
    name text NOT NULL,
    age integer NOT NULL,
    "position" text NOT NULL,
    team_id text NOT NULL,
    shirt_no integer NOT NULL
);


ALTER TABLE public."Players" OWNER TO kirasuo02;

--
-- Name: Teams; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public."Teams" (
    id text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Teams" OWNER TO kirasuo02;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: kirasuo02
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO kirasuo02;

--
-- Name: Chairman id; Type: DEFAULT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Chairman" ALTER COLUMN id SET DEFAULT nextval('public."Chairman_id_seq"'::regclass);


--
-- Name: Employee id; Type: DEFAULT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Employee" ALTER COLUMN id SET DEFAULT nextval('public."Employee_id_seq"'::regclass);


--
-- Name: PlayerTeammateThoughts id; Type: DEFAULT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerTeammateThoughts" ALTER COLUMN id SET DEFAULT nextval('public."PlayerTeammateThoughts_id_seq"'::regclass);


--
-- Data for Name: Chairman; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."Chairman" (id, name, age, team_id) FROM stdin;
\.


--
-- Data for Name: Employee; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."Employee" (id, name, age, "position", team_id) FROM stdin;
1541	Uchiha Sasuke	36	Coach	aot
1542	Sarutobi Konohamaru	36	Coach	boboiboy
1543	Hatake Kakashi	50	Coach	boruto
1544	Sakayanagi Arisu	18	Coach	cote
1545	Kisuke Urahara	35	Coach	bleach
1546	Hiroshi Agasa	52	Coach	dfc
1547	Ubuyashiki Kagaya	30	Coach	ds
1548	Elichiro Senjou	52	Coach	doraemon
1549	Vegeta	38	Coach	dbz
1550	Makarov Dreyar	90	Coach	ft
1551	Ging Freecs	43	Coach	hxh
1552	Kudou Michiya	41	Coach	ie
1553	Monkey D Dragon	55	Coach	op
1554	Kukui	39	Coach	pl
1555	Ash Ketchum	19	Coach	pw
1556	Uchiha Itachi	42	Coach	ta
1557	Kozo Kira	44	Coach	tfs
1558	Ismail bin Mail	18	Coach	u_and_i
1559	Hiroshi Nohara	35	Coach	csc
1560	Kuseno Hakase	46	Coach	opm
\.


--
-- Data for Name: Is_Participant; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."Is_Participant" (team_id, is_participant) FROM stdin;
aot	t
ie	t
opm	t
jjk	f
dn	f
efc	f
doraemon	t
boboiboy	t
ta	t
ds	t
ft	t
bleach	t
u_and_i	t
pl	t
naruto	f
tfs	t
boruto	t
dfc	f
db	f
hxh	t
pw	t
csc	t
cote	f
dbz	t
op	t
\.


--
-- Data for Name: Leagues; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."Leagues" (id, name) FROM stdin;
AFC_B	AFC Manga League B
AFC_A	AFC Manga League
SC	Super Cup
BOTB	Best of the Best
\.


--
-- Data for Name: PersonalAchievements; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."PersonalAchievements" (id, name) FROM stdin;
MVP	Best Player
GB	Golden Boot
PM	Passing Master
BGK	Best Goalkeeper
\.


--
-- Data for Name: PlayerInfo; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."PlayerInfo" (player_id, dob, birthplace, gender, biography, height) FROM stdin;
cote_25	1900-10-20	Japan	Male	Loading biography......	174
boruto_10	1900-03-26	Konohagakure	Male	Loading biography......	178
bleach_10	1900-05-28	Japan	Male	Loading biography......	186
dfc_1	1900-01-07	Japan	Male	Loading biography......	190
ds_30	1900-10-31	Japan	Male	Loading biography......	198
dbz_6	1900-10-24	Japan	Male	Loading biography......	158
ie_10	1900-05-29	Japan	Male	Loading biography......	183
ie_1	1900-08-21	Japan	Male	Loading biography......	173
hxh_11	1900-04-03	Japan	Male	Loading biography......	171
ta_7	1900-11-25	Grand Line	Male	Loading biography......	209
ta_11	1900-03-19	East Blue	Male	Loading biography......	187
u_and_i_7	1900-01-14	Malaysia	Male	Loading biography......	172
u_and_i_9	1900-02-26	Malaysia	Male	Loading biography......	174
jjk_10	1900-03-19	Japan	Male	Loading biography......	173
dn_1	1900-12-02	Japan	Male	Loading biography......	230
efc_1	1900-10-04	Japan	Male	Loading biography......	183
opm_11	1900-09-03	Japan	Male	Loading biography......	177
cote_7	1900-04-23	Japan	Male	Loading biography......	178
cote_3	1900-03-03	Japan	Male	Loading biography......	181
dfc_10	1900-04-04	Japan	Male	Loading biography......	174
aot_25	1900-07-31	Liberio	Male	Loading biography......	183
dbz_10	1900-05-17	Japan	Male	Loading biography......	176
dbz_8	1900-10-29	Japan	Male	Loading biography......	153
dbz_17	1900-02-15	Japan	Male	Loading biography......	213
hxh_7	1900-06-14	Japan	Male	Loading biography......	188
op_7	1900-03-01	North Blue	Male	Loading biography......	180
hxh_4	1900-11-15	Japan	Male	Loading biography......	177
u_and_i_3	1900-01-03	Malaysia	Male	Loading biography......	180
doraemon_7	1900-08-06	Japan	Male	Loading biography......	178
jjk_25	1900-12-06	Japan	Male	Loading biography......	190
jjk_7	1900-12-22	Japan	Male	Loading biography......	175
pl_11	1900-09-14	Unova	Male	Loading biography......	150
cote_10	1900-10-20	Japan	Male	Genius of White Room, Mastermind of everywhere he goes, great tactician, but little who know he really is.; Good skills for playing football, can evaluate and analyse what happened in the pitch, but only keeps in his mind while he is playing, need to be understood or his team will lose because of disconnection.	176
bleach_7	1900-07-14	Japan	Male	Loading biography......	181
boruto_7	1900-05-12	Konohagakure	Male	Loading biography......	183
ie_11	1900-09-15	Japan	Male	Loading biography......	175
op_23	1900-04-01	Grand Line	Male	Loading biography......	201
ft_7	1900-02-12	Japan	Male	Loading biography......	180
u_and_i_1	1900-03-08	Malaysia	Male	Loading biography......	175
efc_8	1900-05-29	Japan	Male	Loading biography......	168
opm_7	1900-10-04	Japan	Male	Loading biography......	174
aot_3	1900-04-06	Trost	Male	Loading biography......	175
bleach_8	1900-01-30	Japan	Male	Loading biography......	180
dbz_7	1900-07-14	Japan	Male	Loading biography......	170
doraemon_8	1900-04-14	Japan	Male	Loading biography......	178
doraemon_1	1900-06-14	Japan	Male	Loading biography......	190
opm_10	1900-10-10	Japan	Male	Loading biography......	178
boboiboy_3	1900-12-30	Malaysia	Male	Loading biography......	172
boruto_17	1900-09-22	Konohagakure	Male	Loading biography......	173
doraemon_10	1900-09-02	Japan	Male	Loading biography......	170
hxh_1	1900-05-04	Japan	Male	Loading biography......	184
ie_20	1900-10-01	Japan	Male	Loading biography......	182
tfs_10	1900-07-27	Japan	Male	Loading biography......	175
csc_7	1900-10-06	Japan	Male	Loading biography......	170
pw_4	1900-09-12	Kanto	Male	Loading biography......	200
boboiboy_8	1900-04-12	Malaysia	Male	Loading biography......	163
bleach_1	1900-12-20	Japan	Male	Loading biography......	134
ft_6	1900-04-15	Japan	Male	Loading biography......	193
ie_2	1900-01-31	Japan	Male	Loading biography......	175
tfs_25	1900-12-29	Japan	Male	Loading biography......	187
csc_11	1900-02-07	Johto	Male	Loading biography......	168
pl_9	1900-01-19	Unova	Male	Loading biography......	150
boboiboy_20	1900-12-17	Malaysia	Male	Loading biography......	155
boruto_25	1900-04-24	Sunagakure	Male	Loading biography......	183
ds_7	1900-09-02	Japan	Male	Loading biography......	165
doraemon_11	1900-02-28	Japan	Male	Loading biography......	175
ta_10	1900-10-05	North Blue	Male	Loading biography......	191
u_and_i_10	1900-02-21	Malaysia	Male	Loading biography......	174
u_and_i_11	1900-09-15	Malaysia	Male	Loading biography......	174
dn_6	1900-08-23	Japan	Male	Loading biography......	155
boboiboy_1	1900-06-19	Malaysia	Male	Loading biography......	170
aot_7	1900-11-02	Shiganshina	Male	Loading biography......	169
ft_10	1900-01-15	Japan	Male	Loading biography......	170
op_10	1900-11-11	East Blue	Male	Loading biography......	181
tfs_1	1900-12-06	Japan	Male	Loading biography......	183
opm_13	1900-03-10	Japan	Male	Loading biography......	172
ta_25	1900-09-30	South Blue	Male	Loading biography......	205
boruto_12	1900-12-04	Konohagakure	Male	Loading biography......	170
bleach_5	1900-07-30	Japan	Male	Loading biography......	186
ds_17	1900-04-21	Japan	Male	Loading biography......	164
hxh_10	1900-06-05	Japan	Male	Loading biography......	190
ta_9	1899-12-31	South Blue	Male	Loading biography......	185
csc_10	1900-05-04	Japan	Male	Loading biography......	168
pw_6	1900-07-09	Kanto	Male	Loading biography......	170
aot_10	1900-03-29	Shiganshina	Male	Loading biography......	183
dfc_17	1900-07-18	Japan	Male	Loading biography......	184
ds_1	1900-07-13	Japan	Male	Loading biography......	165
pw_1	1900-03-31	Kanto	Male	Loading biography......	160
tfs_9	1900-08-16	Japan	Male	Loading biography......	180
csc_1	1900-08-30	Johto	Male	Loading biography......	182
dn_10	1900-10-31	Japan	Male	Loading biography......	179
cote_8	1900-01-08	Japan	Male	Loading biography......	174
dfc_7	1900-08-11	Japan	Male	Loading biography......	177
dbz_1	1900-05-07	Japan	Male	Loading biography......	215
pw_9	1900-05-20	Kanto	Male	Loading biography......	190
tfs_12	1900-06-20	Japan	Male	Loading biography......	176
ft_1	1900-09-04	Japan	Male	Loading biography......	186
efc_9	1900-02-11	Amegakure	Male	Loading biography......	168
boruto_8	1900-07-24	Konohagakure	Male	Loading biography......	172
ds_10	1900-02-07	Japan	Male	Loading biography......	176
op_1	1900-05-04	East Blue	Male	Loading biography......	174
tfs_14	1900-06-22	Japan	Male	Loading biography......	178
opm_1	1900-11-10	Japan	Male	Loading biography......	187
jjk_11	1900-03-06	Japan	Male	Loading biography......	176
boruto_1	1900-04-04	Konohagakure	Male	Loading biography......	183
ds_16	1900-11-29	Japan	Male	Loading biography......	179
op_4	1900-03-08	South Blue	Male	Loading biography......	240
pl_1	1900-01-20	Sinnoh	Male	Loading biography......	170
jjk_8	1900-10-23	Japan	Male	Loading biography......	164
pw_10	1900-02-04	Kanto	Male	Loading biography......	180
boboiboy_10	1900-03-12	Malaysia	Male	Loading biography......	160
dfc_16	1900-01-14	Japan	Male	Loading biography......	182
op_6	1900-05-12	East Blue	Male	Loading biography......	167
pl_7	1900-05-11	Unova	Male	Loading biography......	150
ta_1	1900-02-08	South Blue	Male	Loading biography......	219
csc_8	1900-09-19	Kirigakure	Male	Loading biography......	168
efc_10	1900-10-31	Japan	Male	Loading biography......	213
ft_5	1900-08-01	Japan	Male	Loading biography......	208
aot_8	1900-12-25	Paradis Island	Male	Loading biography......	160
dfc_8	1900-07-13	Japan	Male	Loading biography......	177
ft_23	1900-07-15	Japan	Male	Loading biography......	183
ie_14	1900-04-13	Japan	Male	Loading biography......	175
pl_10	1900-12-30	Kanto	Male	Loading biography......	200
opm_9	1900-04-20	Japan	Male	Loading biography......	175
dn_7	1900-02-27	Japan	Male	Loading biography......	179
\.


--
-- Data for Name: PlayerPersonalAchievements; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."PlayerPersonalAchievements" (player_id, achievement_id, team_id, id, league_id, "time") FROM stdin;
opm_9	GB	opm	opm9GBAFCB2025	AFC_B	2025
opm_10	PM	opm	opm10PMAFCB2025	AFC_B	2025
ta_7	GB	ta	ta7GBAFC2024	AFC_A	2024
doraemon_1	BGK	doraemon	doraemon1BGKAFC2024	AFC_A	2024
ta_10	MVP	op	ta10MVPBOTB2022	BOTB	2022
ta_10	PM	ta	ta10PMAFC2024	AFC_A	2024
ta_10	MVP	ta	ta10MVPAFC2024	AFC_A	2024
\.


--
-- Data for Name: PlayerRatings; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."PlayerRatings" (player_id, pace, shooting, passing, physical, defending, dribbling) FROM stdin;
cote_10	70	76	57	60	51	64
cote_7	67	60	66	65	60	58
cote_25	62	51	55	46	40	52
cote_8	66	54	67	60	51	56
efc_1	53	50	50	40	40	50
aot_10	71	86	78	67	62	73
aot_8	71	87	92	64	57	76
aot_7	68	66	62	67	62	60
aot_25	66	54	56	70	66	53
aot_3	65	53	65	70	66	54
efc_9	65	70	56	65	54	61
boboiboy_8	67	58	56	67	63	55
boboiboy_1	65	51	55	67	54	52
boboiboy_10	67	64	75	67	63	62
boboiboy_3	57	50	50	61	63	50
boboiboy_20	61	52	52	64	63	51
boruto_8	71	89	99	69	65	78
boruto_25	54	51	53	63	69	51
boruto_1	61	51	57	68	69	52
boruto_17	56	56	54	63	69	54
boruto_12	55	54	57	63	69	53
boruto_10	73	99	99	69	65	85
boruto_7	73	99	88	69	65	81
bleach_7	74	99	72	59	50	79
bleach_8	69	76	95	62	54	72
bleach_1	65	52	64	62	54	54
bleach_10	68	72	88	65	58	68
bleach_5	68	68	59	59	50	60
dfc_10	68	68	68	67	62	62
dfc_7	67	61	66	67	62	59
dfc_8	67	59	53	67	62	55
dfc_16	66	54	59	67	62	54
dfc_17	50	50	50	55	62	50
dfc_1	65	50	50	67	62	50
ds_10	69	74	80	63	56	68
ds_7	71	84	65	60	52	69
ds_16	68	69	63	55	43	61
ds_1	65	62	86	68	65	63
ds_30	51	50	50	52	56	50
ds_17	68	68	69	55	43	63
doraemon_10	69	88	95	65	61	77
doraemon_7	73	99	87	65	61	86
doraemon_8	69	74	62	69	66	64
doraemon_11	67	64	65	66	61	60
doraemon_1	66	59	91	61	52	63
dbz_10	70	94	83	64	61	78
dbz_7	68	92	94	64	61	79
dbz_8	63	74	68	64	65	65
dbz_6	62	70	61	64	65	62
dbz_17	56	62	62	63	70	58
dbz_1	65	58	92	66	61	62
ft_10	73	99	92	69	65	82
ft_7	73	99	96	69	65	84
ft_6	62	61	58	67	69	57
ft_5	61	58	60	67	69	56
ft_23	50	50	50	60	69	50
ft_1	66	62	85	69	65	63
hxh_10	74	99	82	60	51	82
hxh_7	74	99	94	60	51	85
hxh_11	69	74	75	68	65	66
hxh_4	68	68	69	68	65	63
hxh_1	67	67	99	66	60	70
ie_11	71	84	66	67	63	70
ie_2	69	71	55	67	63	61
ie_10	69	71	66	67	63	63
ie_14	68	66	60	70	67	60
ie_1	63	60	99	68	67	68
ie_20	52	50	50	60	67	50
op_7	71	99	94	66	65	85
op_10	68	90	84	63	60	76
op_6	66	65	59	70	69	59
op_4	58	62	62	65	69	58
op_1	65	71	93	69	69	69
op_23	53	51	57	59	65	52
pw_10	70	81	71	69	66	69
pw_6	67	61	65	69	66	58
pw_4	65	50	52	69	66	50
pw_1	66	55	62	66	62	55
pw_9	69	71	70	69	66	64
pl_7	69	74	72	69	65	66
pl_10	69	77	70	68	56	67
pl_9	68	67	67	69	65	62
pl_11	68	64	59	69	65	58
pl_1	66	55	72	69	65	57
ta_7	72	99	65	68	70	82
ta_10	66	80	99	70	70	80
ta_9	70	90	74	70	70	74
ta_11	64	75	82	68	70	68
ta_25	63	57	76	69	70	59
ta_1	53	52	55	62	70	52
tfs_10	73	99	94	70	67	83
tfs_9	68	66	62	70	67	60
tfs_14	69	79	99	70	67	74
tfs_12	68	65	57	70	67	58
tfs_25	59	52	54	65	67	52
tfs_1	57	51	53	64	67	51
u_and_i_10	65	66	62	68	68	60
u_and_i_9	68	83	81	68	68	72
u_and_i_11	66	75	97	68	68	71
u_and_i_7	59	59	53	61	63	55
u_and_i_3	63	67	56	66	68	59
u_and_i_1	65	52	60	70	68	53
\.


--
-- Data for Name: PlayerStats; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."PlayerStats" (player_id, matches, goals, assists, yellow_cards, red_cards, id, league_id, year, team_id) FROM stdin;
cote_10	34	18	2	2	0	cote_10_AFC_2024	AFC_A	2024	cote
cote_7	34	5	9	0	0	cote_7_AFC_2024	AFC_A	2024	cote
cote_25	26	0	3	6	4	cote_25_AFC_2024	AFC_A	2024	cote
cote_8	34	1	10	2	0	cote_8_AFC_2024	AFC_A	2024	cote
efc_1	6	0	0	8	3	cote_1_AFC_2024	AFC_A	2024	cote
aot_10	34	23	14	1	0	aot_10_AFC_2024	AFC_A	2024	aot
aot_8	34	22	22	2	0	aot_8_AFC_2024	AFC_A	2024	aot
aot_7	34	10	6	1	0	aot_7_AFC_2024	AFC_A	2024	aot
aot_25	34	2	3	0	0	aot_25_AFC_2024	AFC_A	2024	aot
aot_3	34	0	9	0	0	aot_3_AFC_2024	AFC_A	2024	aot
efc_9	26	14	2	0	1	boboiboy_7_AFC_2024	AFC_A	2024	boboiboy
boboiboy_8	34	5	3	0	0	boboiboy_8_AFC_2024	AFC_A	2024	boboiboy
boboiboy_1	34	0	3	0	1	boboiboy_1_AFC_2024	AFC_A	2024	boboiboy
boboiboy_10	34	7	14	0	0	boboiboy_10_AFC_2024	AFC_A	2024	boboiboy
boboiboy_3	16	0	0	0	0	boboiboy_3_AFC_2024	AFC_A	2024	boboiboy
boboiboy_20	23	1	1	0	0	boboiboy_20_AFC_2024	AFC_A	2024	boboiboy
boruto_8	34	22	26	1	0	boruto_8_AFC_2024	AFC_A	2024	boruto
boruto_25	10	0	2	0	0	boruto_25_AFC_2024	AFC_A	2024	boruto
boruto_1	24	0	4	0	0	boruto_1_AFC_2024	AFC_A	2024	boruto
boruto_17	11	4	2	0	0	boruto_17_AFC_2024	AFC_A	2024	boruto
boruto_12	11	2	4	0	0	boruto_12_AFC_2024	AFC_A	2024	boruto
boruto_10	34	29	29	1	0	boruto_10_AFC_2024	AFC_A	2024	boruto
boruto_7	34	31	19	1	0	boruto_7_AFC_2024	AFC_A	2024	boruto
bleach_7	34	35	9	4	0	bleach_7_AFC_2024	AFC_A	2024	bleach
bleach_8	34	13	25	3	0	bleach_8_AFC_2024	AFC_A	2024	bleach
bleach_1	34	0	8	3	0	bleach_1_AFC_2024	AFC_A	2024	bleach
bleach_10	34	11	21	2	0	bleach_10_AFC_2024	AFC_A	2024	bleach
bleach_5	34	12	4	4	0	bleach_5_AFC_2024	AFC_A	2024	bleach
dfc_10	34	11	9	0	0	dfc_10_AFC_2024	AFC_A	2024	dfc
dfc_7	34	6	9	0	0	dfc_7_AFC_2024	AFC_A	2024	dfc
dfc_8	34	6	1	0	0	dfc_8_AFC_2024	AFC_A	2024	dfc
dfc_16	34	2	5	0	0	dfc_16_AFC_2024	AFC_A	2024	dfc
dfc_17	0	0	0	0	0	dfc_17_AFC_2024	AFC_A	2024	dfc
dfc_1	34	0	0	0	0	dfc_1_AFC_2024	AFC_A	2024	dfc
ds_10	34	14	16	2	0	ds_10_AFC_2024	AFC_A	2024	ds
ds_7	34	23	6	3	0	ds_7_AFC_2024	AFC_A	2024	ds
ds_16	34	12	6	5	0	ds_16_AFC_2024	AFC_A	2024	ds
ds_1	31	4	21	0	0	ds_1_AFC_2024	AFC_A	2024	ds
ds_30	3	0	0	2	0	ds_30_AFC_2024	AFC_A	2024	ds
ds_17	34	11	10	5	0	ds_17_AFC_2024	AFC_A	2024	ds
doraemon_10	30	22	24	2	0	doraemon_10_AFC_2024	AFC_A	2024	doraemon
doraemon_7	30	39	17	2	0	doraemon_7_AFC_2024	AFC_A	2024	doraemon
doraemon_8	34	16	5	1	0	doraemon_8_AFC_2024	AFC_A	2024	doraemon
doraemon_11	34	8	8	2	0	doraemon_11_AFC_2024	AFC_A	2024	doraemon
doraemon_1	34	1	24	4	0	doraemon_1_AFC_2024	AFC_A	2024	doraemon
dbz_10	28	28	16	2	0	dbz_10_AFC_2024	AFC_A	2024	dbz
dbz_7	27	25	23	2	0	dbz_7_AFC_2024	AFC_A	2024	dbz
dbz_8	20	15	9	1	0	dbz_8_AFC_2024	AFC_A	2024	dbz
dbz_6	20	13	5	1	0	dbz_6_AFC_2024	AFC_A	2024	dbz
dbz_17	10	7	6	0	0	dbz_17_AFC_2024	AFC_A	2024	dbz
dbz_1	34	0	25	2	0	dbz_1_AFC_2024	AFC_A	2024	dbz
ft_10	34	31	21	1	0	ft_10_AFC_2024	AFC_A	2024	ft
ft_7	34	32	23	1	0	ft_7_AFC_2024	AFC_A	2024	ft
ft_6	22	7	4	0	0	ft_6_AFC_2024	AFC_A	2024	ft
ft_5	22	5	5	0	0	ft_5_AFC_2024	AFC_A	2024	ft
ft_23	0	0	0	0	0	ft_23_AFC_2024	AFC_A	2024	ft
ft_1	34	4	20	1	0	ft_1_AFC_2024	AFC_A	2024	ft
hxh_10	34	35	15	4	0	hxh_10_AFC_2024	AFC_A	2024	hxh
hxh_7	34	34	22	4	0	hxh_7_AFC_2024	AFC_A	2024	hxh
hxh_11	34	14	13	1	0	hxh_11_AFC_2024	AFC_A	2024	hxh
hxh_4	34	11	10	1	0	hxh_4_AFC_2024	AFC_A	2024	hxh
hxh_1	34	5	33	2	0	hxh_1_AFC_2024	AFC_A	2024	hxh
ie_11	34	23	7	1	0	ie_11_AFC_2024	AFC_A	2024	ie
ie_2	34	15	1	1	0	ie_2_AFC_2024	AFC_A	2024	ie
ie_10	34	13	8	1	0	ie_10_AFC_2024	AFC_A	2024	ie
ie_14	34	10	5	0	0	ie_14_AFC_2024	AFC_A	2024	ie
ie_1	29	0	35	0	0	ie_1_AFC_2024	AFC_A	2024	ie
ie_20	5	0	0	0	0	ie_20_AFC_2024	AFC_A	2024	ie
op_7	27	34	22	1	0	op_7_AFC_2024	AFC_A	2024	op
op_10	27	25	17	2	0	op_10_AFC_2024	AFC_A	2024	op
op_6	30	10	4	0	0	op_6_AFC_2024	AFC_A	2024	op
op_4	15	7	6	0	0	op_4_AFC_2024	AFC_A	2024	op
op_1	27	10	24	0	0	op_1_AFC_2024	AFC_A	2024	op
op_23	7	0	4	1	0	op_23_AFC_2024	AFC_A	2024	op
pw_10	34	20	10	0	0	pw_10_AFC_2024	AFC_A	2024	pw
pw_6	34	6	8	0	0	pw_6_AFC_2024	AFC_A	2024	pw
pw_4	34	0	1	0	0	pw_4_AFC_2024	AFC_A	2024	pw
pw_1	34	2	7	1	0	pw_1_AFC_2024	AFC_A	2024	pw
pw_9	34	13	10	0	0	pw_9_AFC_2024	AFC_A	2024	pw
pl_7	34	15	11	0	0	pl_7_AFC_2024	AFC_A	2024	pl
pl_10	32	17	10	0	1	pl_10_AFC_2024	AFC_A	2024	pl
pl_9	34	10	9	0	0	pl_9_AFC_2024	AFC_A	2024	pl
pl_11	34	9	4	0	0	pl_11_AFC_2024	AFC_A	2024	pl
pl_1	34	1	13	0	0	pl_1_AFC_2024	AFC_A	2024	pl
ta_7	25	43	4	0	0	ta_7_AFC_2024	AFC_A	2024	ta
ta_10	29	12	44	0	0	ta_10_AFC_2024	AFC_A	2024	ta
ta_9	29	26	11	0	0	ta_9_AFC_2024	AFC_A	2024	ta
ta_11	24	14	17	0	0	ta_11_AFC_2024	AFC_A	2024	ta
ta_25	27	2	15	0	0	ta_25_AFC_2024	AFC_A	2024	ta
ta_1	7	1	3	0	0	ta_1_AFC_2024	AFC_A	2024	ta
tfs_10	34	31	22	0	0	tfs_10_AFC_2024	AFC_A	2024	tfs
tfs_9	34	10	6	0	0	tfs_9_AFC_2024	AFC_A	2024	tfs
tfs_14	34	15	28	0	0	tfs_14_AFC_2024	AFC_A	2024	tfs
tfs_12	34	10	3	0	0	tfs_12_AFC_2024	AFC_A	2024	tfs
tfs_25	19	1	2	0	0	tfs_25_AFC_2024	AFC_A	2024	tfs
tfs_1	15	0	2	0	0	tfs_1_AFC_2024	AFC_A	2024	tfs
u_and_i_10	27	10	6	0	0	u_and_i_10_AFC_2024	AFC_A	2024	u_and_i
u_and_i_9	29	20	16	0	0	u_and_i_9_AFC_2024	AFC_A	2024	u_and_i
u_and_i_11	29	12	26	0	0	u_and_i_11_AFC_2024	AFC_A	2024	u_and_i
u_and_i_7	17	6	1	1	0	u_and_i_7_AFC_2024	AFC_A	2024	u_and_i
u_and_i_3	22	12	2	0	0	u_and_i_3_AFC_2024	AFC_A	2024	u_and_i
u_and_i_1	34	0	6	0	0	u_and_i_1_AFC_2024	AFC_A	2024	u_and_i
dfc_10	7	4	0	0	0	dfc_10_AFCB_2025	AFC_B	2025	dfc
dfc_7	7	4	5	0	0	dfc_7_AFCB_2025	AFC_B	2025	dfc
dfc_8	7	3	5	0	0	dfc_8_AFCB_2025	AFC_B	2025	dfc
dfc_16	0	0	0	0	0	dfc_16_AFCB_2025	AFC_B	2025	dfc
dfc_17	7	0	0	0	0	dfc_17_AFCB_2025	AFC_B	2025	dfc
dfc_1	7	0	1	0	0	dfc_1_AFCB_2025	AFC_B	2025	dfc
cote_10	7	10	2	0	0	cote_10_AFCB_2025	AFC_B	2025	cote
cote_7	7	3	4	0	0	cote_7_AFCB_2025	AFC_B	2025	cote
cote_25	7	0	5	0	0	cote_25_AFCB_2025	AFC_B	2025	cote
cote_8	7	1	4	0	0	cote_8_AFCB_2025	AFC_B	2025	cote
cote_3	4	2	0	0	0	cote_3_AFCB_2025	AFC_B	2025	cote
opm_9	8	12	2	0	0	opm_9_AFCB_2025	AFC_B	2025	opm
opm_10	8	3	8	0	0	opm_10_AFCB_2025	AFC_B	2025	opm
opm_7	8	6	3	0	0	opm_7_AFCB_2025	AFC_B	2025	opm
opm_11	6	1	2	0	0	opm_11_AFCB_2025	AFC_B	2025	opm
opm_13	2	0	1	0	0	opm_13_AFCB_2025	AFC_B	2025	opm
opm_1	8	0	3	0	0	opm_1_AFCB_2025	AFC_B	2025	opm
csc_10	8	2	1	0	0	csc_10_AFCB_2025	AFC_B	2025	csc
csc_8	8	7	4	0	0	csc_8_AFCB_2025	AFC_B	2025	csc
csc_7	8	6	3	0	0	csc_7_AFCB_2025	AFC_B	2025	csc
csc_11	8	3	2	0	0	csc_11_AFCB_2025	AFC_B	2025	csc
csc_1	8	0	6	0	0	csc_1_AFCB_2025	AFC_B	2025	csc
jjk_10	6	4	0	0	0	jjk_10_AFCB_2025	AFC_B	2025	jjk
jjk_7	6	1	1	0	0	jjk_7_AFCB_2025	AFC_B	2025	jjk
jjk_8	6	2	0	0	0	jjk_8_AFCB_2025	AFC_B	2025	jjk
jjk_11	6	1	0	0	0	jjk_11_AFCB_2025	AFC_B	2025	jjk
jjk_25	6	1	7	0	0	jjk_25_AFCB_2025	AFC_B	2025	jjk
dn_10	6	4	2	0	0	dn_10_AFCB_2025	AFC_B	2025	dn
dn_7	6	3	3	0	0	dn_7_AFCB_2025	AFC_B	2025	dn
dn_1	6	1	2	0	0	dn_1_AFCB_2025	AFC_B	2025	dn
dn_6	6	0	0	0	0	dn_6_AFCB_2025	AFC_B	2025	dn
efc_1	6	0	0	0	0	efc_1_AFCB_2025	AFC_B	2025	efc
efc_8	6	0	0	0	0	efc_8_AFCB_2025	AFC_B	2025	efc
efc_10	6	0	0	0	0	efc_10_AFCB_2025	AFC_B	2025	efc
efc_9	6	0	0	0	0	efc_9_AFCB_2025	AFC_B	2025	efc
\.


--
-- Data for Name: PlayerTeamAchievements; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."PlayerTeamAchievements" (id, player_id, place, league_id, team_id, "time") FROM stdin;
ta10AFC2022	ta_10	Runner-up	AFC_A	op	2022
op10AFC2024	op_10	Runner-up	AFC_A	op	2024
ta9BOTB2022	ta_9	Champions	BOTB	op	2022
ta10BOTB2022	ta_10	Champions	BOTB	op	2022
opm9AFCB2025	opm_9	Champions	AFC_B	opm	2025
hxh7AFC2023	hxh_7	Runner-up	AFC_A	hxh	2023
boruto7AFC2022	boruto_7	Champions	AFC_A	naruto	2022
dbz10AFC2024	dbz_10	Champions	AFC_A	dbz	2024
dbz7AFC2024	dbz_7	Champions	AFC_A	dbz	2024
opm11AFCB2025	opm_11	Champions	AFC_B	opm	2025
csc8AFCB2025	csc_8	Runner-up	AFC_B	csc	2025
dbz8AFC2024	dbz_8	Champions	AFC_A	dbz	2024
op1AFC2022	op_1	Runner-up	AFC_A	op	2022
op6AFC2024	op_6	Runner-up	AFC_A	op	2024
op1AFC2024	op_1	Runner-up	AFC_A	op	2024
opm7AFCB2025	opm_7	Champions	AFC_B	opm	2025
csc1AFCB2025	csc_1	Runner-up	AFC_B	csc	2025
dbz6AFC2024	dbz_6	Champions	AFC_A	dbz	2024
opm1AFCB2025	opm_1	Champions	AFC_B	opm	2025
ta11BOTB2022	ta_11	Champions	BOTB	op	2022
opm13AFCB2025	opm_13	Champions	AFC_B	opm	2025
csc11AFCB2025	csc_11	Runner-up	AFC_B	csc	2025
op1BOTB2022	op_1	Champions	BOTB	op	2022
hxh4AFC2023	hxh_4	Runner-up	AFC_A	hxh	2023
ta25BOTB2022	ta_25	Champions	BOTB	op	2022
op7AFC2024	op_7	Runner-up	AFC_A	op	2024
csc10AFCB2025	csc_10	Runner-up	AFC_B	csc	2025
op23AFC2024	op_23	Runner-up	AFC_A	op	2024
dbz17AFC2024	dbz_17	Champions	AFC_A	dbz	2024
csc7AFCB2025	csc_7	Runner-up	AFC_B	csc	2025
hxh10AFC2023	hxh_10	Runner-up	AFC_A	hxh	2023
opm10AFCB2025	opm_10	Champions	AFC_B	opm	2025
ta11AFC2022	ta_11	Runner-up	AFC_A	op	2022
op4AFC2024	op_4	Runner-up	AFC_A	op	2024
hxh11AFC2023	hxh_11	Runner-up	AFC_A	hxh	2023
ta9AFC2022	ta_9	Runner-up	AFC_A	op	2022
dbz1SCW2022	dbz_1	Champions	SC	db	Winter 2022
hxh1AFC2023	hxh_1	Runner-up	AFC_A	hxh	2023
ta25AFC2022	ta_25	Runner-up	AFC_A	op	2022
dbz1AFC2024	dbz_1	Champions	AFC_A	dbz	2024
\.


--
-- Data for Name: PlayerTeammateThoughts; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."PlayerTeammateThoughts" (id, player_id, thoughts, sent_to) FROM stdin;
137	cote_8	He is a good player, a player whom I can trust.	cote_10
138	cote_25	He is good but I should be the captain to kick his ass cause sometimes he doesn't focus on the f**king pitch.	cote_10
\.


--
-- Data for Name: Players; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."Players" (id, name, age, "position", team_id, shirt_no) FROM stdin;
cote_10	Kiyotaka Ayanokouji	18	Striker	cote	10
cote_7	Manabu Horikita	20	Midfielder	cote	7
cote_25	Kakeru Ryuen	18	Goalkeeper	cote	25
cote_8	Yosuke Hirata	18	Midfielder	cote	8
aot_10	Eren Yeager	20	Striker	aot	10
aot_8	Levi Ackerman	28	Midfielder	aot	8
aot_7	Armin Arlelt	20	Midfielder	aot	7
aot_25	Zeke Yeager	30	Goalkeeper	aot	25
aot_3	Jean Kirstein	31	Defender	aot	3
boboiboy_8	Fang	16	Midfielder	boboiboy	8
boboiboy_1	Gopal	16	Goalkeeper	boboiboy	1
boboiboy_10	Boboiboy	16	Striker	boboiboy	10
boboiboy_3	Probe	20	Defensive Midfielder	boboiboy	3
boboiboy_20	Adu Du	21	Forward	boboiboy	20
boruto_8	Mitsuki	18	Midfielder	boruto	8
boruto_25	Shinki	18	Goalkeeper	boruto	25
boruto_1	Metal Lee	18	Goalkeeper	boruto	1
boruto_17	Naru Shikadai	18	Midfielder	boruto	17
boruto_12	Yamanaka Inojin	18	Midfielder	boruto	12
boruto_10	Uzumaki Boruto	18	Striker	boruto	10
boruto_7	Kawaki	21	Striker	boruto	7
bleach_7	Ichigo Kurosaki	23	Striker	bleach	7
bleach_1	Hitsugaya Toshiro	25	Goalkeeper	bleach	1
bleach_10	Aizen Sosuke	25	Midfielder	bleach	10
bleach_5	Grimmjow Jaegerjaquez	27	Defender	bleach	5
dfc_10	Edogawa Conan	18	Striker	dfc	10
dfc_7	Heiji Hatori	19	Striker	dfc	7
dfc_8	Subaru Okiya	28	Midfielder	dfc	8
dfc_16	Mitsuhiko Tsuburaya	16	Midfielder	dfc	16
dfc_17	Makoto Kyogoku	19	Midfielder	dfc	17
dfc_1	Genta Kojima	16	Goalkeeper	dfc	1
ds_10	Giyuu Tomioka	22	Midfielder	ds	10
ds_7	Zenitsu Agatsuma	16	Striker	ds	7
ds_16	Sanemi Shinazugawa	22	Midfielder	ds	16
ds_1	Tanjiro Kamado	16	Goalkeeper	ds	1
ds_30	Tengen Uzui	24	Goalkeeper	ds	30
ds_17	Inosuke Hashibira	16	Striker	ds	17
doraemon_10	Doraemon	24	Midfielder	doraemon	10
doraemon_7	Nobita Nobi	23	Striker	doraemon	7
doraemon_8	Dekisugi Hidetoshi	23	Attacking Midfielder	doraemon	8
doraemon_11	Suneo Honekawa	23	Midfielder	doraemon	11
doraemon_1	Takeshi Gouda	23	Goalkeeper	doraemon	1
dbz_10	Son Gohan	18	Striker	dbz	10
dbz_7	Trunks	18	Striker	dbz	7
dbz_8	Krillin	26	Midfielder	dbz	8
dbz_6	Frieza	20	Midfielder	dbz	6
dbz_17	Cell	19	Midfielder	dbz	17
dbz_1	Majin Buu	25	Goalkeeper	dbz	1
ft_10	Natsu Dragneel	24	Striker	ft	10
ft_7	Gray Fullbuster	23	Striker	ft	7
ft_6	Laxus Dreyar	25	Midfielder	ft	6
ft_23	Jellal Fernandes	19	Midfielder	ft	23
ft_1	Gajeel Redfox	24	Goalkeeper	ft	1
ft_5	Elfman Strauss	23	Midfielder	ft	5
hxh_10	Hisoka Morow	24	Striker	hxh	10
hxh_7	Killua Zoldyck	23	Striker	hxh	7
hxh_11	Kurapika Kurta	23	Midfielder	hxh	11
hxh_4	Chrollo Lucifer	28	Defender	hxh	4
hxh_1	Gon Freecs	23	Goalkeeper	hxh	1
ie_11	Kiyama Hiroto	20	Center Forward	ie	11
ie_2	Kazemaru Ichirouta	20	Midfielder	ie	2
ie_10	Gouenji Shuuya	20	Striker	ie	10
ie_14	Kidou Yuuto	20	Midfielder	ie	14
ie_1	Endou Mamoru	20	Goalkeeper	ie	1
ie_20	Tachimukai Yuuki	20	Goalkeeper	ie	20
op_7	Vinsmoke Sanji	26	Striker	op	7
op_10	Roronoa Zoro	26	Striker	op	10
op_6	Koby	20	Midfielder	op	6
op_4	Franky	27	Defender	op	4
op_1	Monkey D. Luffy	23	Goalkeeper	op	1
op_23	Jinbei	27	Goalkeeper	op	23
pw_10	Pikachu	20	Striker	pw	10
pw_6	Charizard	22	Midfielder	pw	6
pw_4	Venusaur	22	Defender	pw	4
pw_1	Machamp	20	Goalkeeper	pw	1
pw_9	Arcanine	20	Striker	pw	9
pl_7	Landorus	20	Striker	pl	7
pl_10	Mewtwo	20	Striker	pl	10
pl_9	Thundurus	20	Midfielder	pl	9
pl_11	Tornadus	20	Midfielder	pl	11
pl_1	Heatran	20	Goalkeeper	pl	1
ta_7	Charlotte Katakuri	21	Striker	ta	7
ta_10	Trafalgar D. Law	23	Midfielder	ta	10
ta_9	Portgas D. Ace	25	Striker	ta	9
ta_11	Sabo	25	Midfielder	ta	11
ta_25	Eustass Kid	23	Goalkeeper/Midfielder	ta	25
ta_1	Bartholomew Kuma	27	Goalkeeper	ta	1
tfs_10	Tsubasa Ozora	21	Striker	tfs	10
tfs_9	Kojiro Hyuga	21	Striker	tfs	9
tfs_14	Jun Mizugi	21	Midfielder	tfs	14
tfs_12	Hikaru Matsuyama	21	Defender	tfs	12
tfs_25	Ken Wakashimazu	21	Goalkeeper	tfs	25
tfs_1	Genzo Wakabayashi	21	Goalkeeper	tfs	1
u_and_i_10	Ijat	18	Midfielder	u_and_i	10
u_and_i_9	Upin	18	Striker	u_and_i	9
u_and_i_11	Ipin	18	Midfielder	u_and_i	11
u_and_i_7	Ehsan	18	Defender	u_and_i	7
u_and_i_3	Jarjit	18	Midfielder	u_and_i	3
u_and_i_1	Dzul	18	Goalkeeper	u_and_i	1
opm_9	Saitama	25	Striker	opm	9
bleach_8	Byakuya Kuchiki	23	Midfielder	bleach	8
opm_10	Genos	19	Midfielder	opm	10
opm_7	Sonic	25	Striker	opm	7
opm_11	Garou	18	Midfielder	opm	11
opm_13	Flashy Flash	25	Defender	opm	13
opm_1	King	29	Goalkeeper	opm	1
csc_10	Shinnosuke Nohara	19	Striker	csc	10
csc_8	Kagura Karatachi	22	Attacking Midfielder	csc	8
csc_7	Kirigaya Kazuto	17	Striker	csc	7
csc_11	Murkrow	25	Center Forward	csc	11
csc_1	Sudowoodo	25	Goalkeeper	csc	1
jjk_10	Itadori Yuuji	18	Striker	jjk	10
jjk_7	Megumi Fushiguro	18	Attacking Midfielder	jjk	7
jjk_11	Yuta Okkotsu	19	Midfielder	jjk	11
jjk_25	Gojo Satoru	26	Goalkeeper	jjk	25
dn_10	L Lawliet	22	Midfielder	dn	10
dn_7	Light Yagami	17	Striker	dn	7
dn_1	Ryuk	24	Goalkeeper	dn	1
dn_6	Nate River	17	Midfielder	dn	6
efc_1	Ken Sudo	18	Goalkeeper	efc	1
efc_8	Haruki Yamauchi	18	Midfielder	efc	8
efc_10	Ryomen Sukuna	22	Striker	efc	10
efc_9	Code	18	Striker	efc	9
cote_3	Rokusuke Koenji	18	Midfielder	cote	3
jjk_8	Inumaki Toge	19	Midfielder	jjk	8
\.


--
-- Data for Name: Teams; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public."Teams" (id, name) FROM stdin;
aot	Attack on Titan
bleach	Bleach
boboiboy	Boboiboy
boruto	Boruto
cote	Classroom of the Elite
dfc	Detective FC
ds	Demon Slayer
dbz	Dragon Ball Z
doraemon	Doraemon
ft	Fairy Tail
hxh	Hunter x Hunter
ie	Inazuma Eleven
op	One Piece
pl	Pokemon Legends
pw	Pokemon Warriors
ta	Team Anime
tfs	Tsubasa: Football Stars
u_and_i	Upin and Ipin
naruto	Naruto
db	Dragon Ball
csc	Crayon Shin-chan
opm	One Punch Man
jjk	Jujutsu Kaisen
dn	Death Note
efc	Elite Football Club
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: kirasuo02
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
d0e20236-0845-4cc2-bc0f-ab55978e5780	ed05b75fbc494b1c124e2686e2576a977b364f0ddb2262c1c7c798dc2ca9350e	2025-06-04 19:59:48.268731+07	20250517161624_init	\N	\N	2025-06-04 19:59:48.241724+07	1
1fdf3fd5-26ee-4fb3-8071-2e69fd6c83de	0b651738eec5a2e7ffd62411838c22fc7e29a529876a3a2f04a9dadfda5a5bae	2025-06-04 19:59:48.274404+07	20250602041011_	\N	\N	2025-06-04 19:59:48.26906+07	1
f259ca83-5ab4-4f4e-b811-1639512b1080	170b4532c8df05aa1b07fa5e8e3a0b84d3b89fa384c6099fe1b76fd241c0a1d6	2025-06-04 19:59:48.277342+07	20250604042820_stats_history	\N	\N	2025-06-04 19:59:48.274728+07	1
bedeccd8-4d61-4845-a878-2ebbc6b019d4	f5195cd91d340d968e911814c78daa58024b8848ac6a334d9831a83d1191efcf	2025-06-04 19:59:48.278946+07	20250604045035_update_stats_history	\N	\N	2025-06-04 19:59:48.277611+07	1
d42307f7-08c3-4343-8fc5-4cea5742d047	ceea8c6d52ac4e36a923bf0b3d61178e5a87cd166f8b6f1a48d1086d40296146	2025-06-04 20:00:48.770499+07	20250604130048_changing_team_status	\N	\N	2025-06-04 20:00:48.7682+07	1
c3114cb0-e5ae-475a-9dee-8f58374b5733	33b973dd04063d8f4e0e7a71cec204719c22264a2e2076395754b43fe5a16334	2025-06-04 21:20:08.247705+07	20250604142007_	\N	\N	2025-06-04 21:20:08.242017+07	1
b3e05104-ca83-4afe-9b9b-088dfc1b9d04	ca8a9c239c999605f0b0a38e23e362e5ca245eff3b77da52f78a85c6dac3d648	2025-06-04 21:32:53.661792+07	20250604143253_change_status_2	\N	\N	2025-06-04 21:32:53.65965+07	1
\.


--
-- Name: Chairman_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kirasuo02
--

SELECT pg_catalog.setval('public."Chairman_id_seq"', 1, false);


--
-- Name: Employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kirasuo02
--

SELECT pg_catalog.setval('public."Employee_id_seq"', 1560, true);


--
-- Name: PlayerTeammateThoughts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kirasuo02
--

SELECT pg_catalog.setval('public."PlayerTeammateThoughts_id_seq"', 138, true);


--
-- Name: Chairman Chairman_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Chairman"
    ADD CONSTRAINT "Chairman_pkey" PRIMARY KEY (id);


--
-- Name: Employee Employee_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Employee"
    ADD CONSTRAINT "Employee_pkey" PRIMARY KEY (id);


--
-- Name: Is_Participant Is_Participant_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Is_Participant"
    ADD CONSTRAINT "Is_Participant_pkey" PRIMARY KEY (team_id);


--
-- Name: Leagues Leagues_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Leagues"
    ADD CONSTRAINT "Leagues_pkey" PRIMARY KEY (id);


--
-- Name: PersonalAchievements PersonalAchievements_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PersonalAchievements"
    ADD CONSTRAINT "PersonalAchievements_pkey" PRIMARY KEY (id);


--
-- Name: PlayerInfo PlayerInfo_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerInfo"
    ADD CONSTRAINT "PlayerInfo_pkey" PRIMARY KEY (player_id);


--
-- Name: PlayerPersonalAchievements PlayerPersonalAchievements_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerPersonalAchievements"
    ADD CONSTRAINT "PlayerPersonalAchievements_pkey" PRIMARY KEY (id);


--
-- Name: PlayerRatings PlayerRatings_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerRatings"
    ADD CONSTRAINT "PlayerRatings_pkey" PRIMARY KEY (player_id);


--
-- Name: PlayerStats PlayerStats_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerStats"
    ADD CONSTRAINT "PlayerStats_pkey" PRIMARY KEY (id);


--
-- Name: PlayerTeamAchievements PlayerTeamAchievements_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerTeamAchievements"
    ADD CONSTRAINT "PlayerTeamAchievements_pkey" PRIMARY KEY (id);


--
-- Name: PlayerTeammateThoughts PlayerTeammateThoughts_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerTeammateThoughts"
    ADD CONSTRAINT "PlayerTeammateThoughts_pkey" PRIMARY KEY (id);


--
-- Name: Players Players_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Players"
    ADD CONSTRAINT "Players_pkey" PRIMARY KEY (id);


--
-- Name: Teams Teams_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Teams"
    ADD CONSTRAINT "Teams_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Chairman_team_id_key; Type: INDEX; Schema: public; Owner: kirasuo02
--

CREATE UNIQUE INDEX "Chairman_team_id_key" ON public."Chairman" USING btree (team_id);


--
-- Name: Chairman Chairman_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Chairman"
    ADD CONSTRAINT "Chairman_team_id_fkey" FOREIGN KEY (team_id) REFERENCES public."Teams"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Employee Employee_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Employee"
    ADD CONSTRAINT "Employee_team_id_fkey" FOREIGN KEY (team_id) REFERENCES public."Teams"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Is_Participant Is_Participant_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Is_Participant"
    ADD CONSTRAINT "Is_Participant_team_id_fkey" FOREIGN KEY (team_id) REFERENCES public."Teams"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerInfo PlayerInfo_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerInfo"
    ADD CONSTRAINT "PlayerInfo_player_id_fkey" FOREIGN KEY (player_id) REFERENCES public."Players"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerPersonalAchievements PlayerPersonalAchievements_achievement_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerPersonalAchievements"
    ADD CONSTRAINT "PlayerPersonalAchievements_achievement_id_fkey" FOREIGN KEY (achievement_id) REFERENCES public."PersonalAchievements"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerPersonalAchievements PlayerPersonalAchievements_league_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerPersonalAchievements"
    ADD CONSTRAINT "PlayerPersonalAchievements_league_id_fkey" FOREIGN KEY (league_id) REFERENCES public."Leagues"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerPersonalAchievements PlayerPersonalAchievements_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerPersonalAchievements"
    ADD CONSTRAINT "PlayerPersonalAchievements_player_id_fkey" FOREIGN KEY (player_id) REFERENCES public."Players"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerPersonalAchievements PlayerPersonalAchievements_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerPersonalAchievements"
    ADD CONSTRAINT "PlayerPersonalAchievements_team_id_fkey" FOREIGN KEY (team_id) REFERENCES public."Teams"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerRatings PlayerRatings_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerRatings"
    ADD CONSTRAINT "PlayerRatings_player_id_fkey" FOREIGN KEY (player_id) REFERENCES public."Players"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerStats PlayerStats_league_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerStats"
    ADD CONSTRAINT "PlayerStats_league_id_fkey" FOREIGN KEY (league_id) REFERENCES public."Leagues"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerStats PlayerStats_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerStats"
    ADD CONSTRAINT "PlayerStats_player_id_fkey" FOREIGN KEY (player_id) REFERENCES public."Players"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerStats PlayerStats_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerStats"
    ADD CONSTRAINT "PlayerStats_team_id_fkey" FOREIGN KEY (team_id) REFERENCES public."Teams"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerTeamAchievements PlayerTeamAchievements_league_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerTeamAchievements"
    ADD CONSTRAINT "PlayerTeamAchievements_league_id_fkey" FOREIGN KEY (league_id) REFERENCES public."Leagues"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerTeamAchievements PlayerTeamAchievements_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerTeamAchievements"
    ADD CONSTRAINT "PlayerTeamAchievements_player_id_fkey" FOREIGN KEY (player_id) REFERENCES public."Players"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerTeamAchievements PlayerTeamAchievements_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerTeamAchievements"
    ADD CONSTRAINT "PlayerTeamAchievements_team_id_fkey" FOREIGN KEY (team_id) REFERENCES public."Teams"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerTeammateThoughts PlayerTeammateThoughts_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerTeammateThoughts"
    ADD CONSTRAINT "PlayerTeammateThoughts_player_id_fkey" FOREIGN KEY (player_id) REFERENCES public."Players"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: PlayerTeammateThoughts PlayerTeammateThoughts_sent_to_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."PlayerTeammateThoughts"
    ADD CONSTRAINT "PlayerTeammateThoughts_sent_to_fkey" FOREIGN KEY (sent_to) REFERENCES public."Players"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Players Players_team_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: kirasuo02
--

ALTER TABLE ONLY public."Players"
    ADD CONSTRAINT "Players_team_id_fkey" FOREIGN KEY (team_id) REFERENCES public."Teams"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

