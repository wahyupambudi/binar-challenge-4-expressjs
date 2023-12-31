PGDMP     "    ;            
    {            mybank    15.3    15.3 +    )           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            *           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            +           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ,           1262    20789    mybank    DATABASE     �   CREATE DATABASE mybank WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Indonesian_Indonesia.1252';
    DROP DATABASE mybank;
                postgres    false            �            1259    25934    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    25964    bank_accounts    TABLE     �   CREATE TABLE public.bank_accounts (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    bank_name text NOT NULL,
    balance integer NOT NULL,
    bank_account_number integer NOT NULL
);
 !   DROP TABLE public.bank_accounts;
       public         heap    postgres    false            �            1259    25963    bank_accounts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bank_accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.bank_accounts_id_seq;
       public          postgres    false    218            -           0    0    bank_accounts_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.bank_accounts_id_seq OWNED BY public.bank_accounts.id;
          public          postgres    false    217            �            1259    25955    profiles    TABLE     �   CREATE TABLE public.profiles (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    identity_type text NOT NULL,
    address text NOT NULL,
    identity_number integer NOT NULL
);
    DROP TABLE public.profiles;
       public         heap    postgres    false            �            1259    25954    profiles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.profiles_id_seq;
       public          postgres    false    216            .           0    0    profiles_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.profiles_id_seq OWNED BY public.profiles.id;
          public          postgres    false    215            �            1259    25973    transaction    TABLE     �   CREATE TABLE public.transaction (
    id integer NOT NULL,
    source_account_id integer NOT NULL,
    destination_account_id integer NOT NULL,
    amount integer NOT NULL,
    type text
);
    DROP TABLE public.transaction;
       public         heap    postgres    false            �            1259    25972    transaction_id_seq    SEQUENCE     �   CREATE SEQUENCE public.transaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.transaction_id_seq;
       public          postgres    false    220            /           0    0    transaction_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.transaction_id_seq OWNED BY public.transaction.id;
          public          postgres    false    219            �            1259    26386    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    26385    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    222            0           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    221            {           2604    25967    bank_accounts id    DEFAULT     t   ALTER TABLE ONLY public.bank_accounts ALTER COLUMN id SET DEFAULT nextval('public.bank_accounts_id_seq'::regclass);
 ?   ALTER TABLE public.bank_accounts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            z           2604    25958    profiles id    DEFAULT     j   ALTER TABLE ONLY public.profiles ALTER COLUMN id SET DEFAULT nextval('public.profiles_id_seq'::regclass);
 :   ALTER TABLE public.profiles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            |           2604    25976    transaction id    DEFAULT     p   ALTER TABLE ONLY public.transaction ALTER COLUMN id SET DEFAULT nextval('public.transaction_id_seq'::regclass);
 =   ALTER TABLE public.transaction ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            }           2604    26389    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222                      0    25934    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   �2       "          0    25964    bank_accounts 
   TABLE DATA           ^   COPY public.bank_accounts (id, "userId", bank_name, balance, bank_account_number) FROM stdin;
    public          postgres    false    218   �4                  0    25955    profiles 
   TABLE DATA           Y   COPY public.profiles (id, "userId", identity_type, address, identity_number) FROM stdin;
    public          postgres    false    216   '5       $          0    25973    transaction 
   TABLE DATA           b   COPY public.transaction (id, source_account_id, destination_account_id, amount, type) FROM stdin;
    public          postgres    false    220   d5       &          0    26386    users 
   TABLE DATA           :   COPY public.users (id, name, email, password) FROM stdin;
    public          postgres    false    222   �5       1           0    0    bank_accounts_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.bank_accounts_id_seq', 9, true);
          public          postgres    false    217            2           0    0    profiles_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.profiles_id_seq', 3, true);
          public          postgres    false    215            3           0    0    transaction_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.transaction_id_seq', 26, true);
          public          postgres    false    219            4           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 9, true);
          public          postgres    false    221                       2606    25942 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           2606    25971     bank_accounts bank_accounts_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.bank_accounts
    ADD CONSTRAINT bank_accounts_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.bank_accounts DROP CONSTRAINT bank_accounts_pkey;
       public            postgres    false    218            �           2606    25962    profiles profiles_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.profiles DROP CONSTRAINT profiles_pkey;
       public            postgres    false    216            �           2606    25978    transaction transaction_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.transaction DROP CONSTRAINT transaction_pkey;
       public            postgres    false    220            �           2606    26393    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    222            �           1259    27233 %   bank_accounts_bank_account_number_key    INDEX     u   CREATE UNIQUE INDEX bank_accounts_bank_account_number_key ON public.bank_accounts USING btree (bank_account_number);
 9   DROP INDEX public.bank_accounts_bank_account_number_key;
       public            postgres    false    218            �           1259    27234    profiles_identity_number_key    INDEX     c   CREATE UNIQUE INDEX profiles_identity_number_key ON public.profiles USING btree (identity_number);
 0   DROP INDEX public.profiles_identity_number_key;
       public            postgres    false    216            �           1259    25980    profiles_userId_key    INDEX     U   CREATE UNIQUE INDEX "profiles_userId_key" ON public.profiles USING btree ("userId");
 )   DROP INDEX public."profiles_userId_key";
       public            postgres    false    216            �           1259    26394    users_email_key    INDEX     I   CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);
 #   DROP INDEX public.users_email_key;
       public            postgres    false    222            �           2606    26400 '   bank_accounts bank_accounts_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.bank_accounts
    ADD CONSTRAINT "bank_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public.bank_accounts DROP CONSTRAINT "bank_accounts_userId_fkey";
       public          postgres    false    3211    218    222            �           2606    26395    profiles profiles_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 I   ALTER TABLE ONLY public.profiles DROP CONSTRAINT "profiles_userId_fkey";
       public          postgres    false    222    216    3211            �           2606    27524 3   transaction transaction_destination_account_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_destination_account_id_fkey FOREIGN KEY (destination_account_id) REFERENCES public.bank_accounts(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 ]   ALTER TABLE ONLY public.transaction DROP CONSTRAINT transaction_destination_account_id_fkey;
       public          postgres    false    3206    218    220            �           2606    27519 .   transaction transaction_source_account_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_source_account_id_fkey FOREIGN KEY (source_account_id) REFERENCES public.bank_accounts(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 X   ALTER TABLE ONLY public.transaction DROP CONSTRAINT transaction_source_account_id_fkey;
       public          postgres    false    220    3206    218               *  x�}�Qn\!E�'�����66o]A�'F��L��䣻/�4m�F� ��a@�Y{*] ��$����5zd94���Y�<;#��C�gd`�|�jX���M��02%���F���-}�E̙u�1���s��~�������ӵ�'"�6)W�)Hb#$OL�SUɋ{/�J?�BuPq)�^W������E�j�(�N<�B�,����,��I=���BY����0����b�x��<�رr���7�4l��M,5��t0(���<��<e��K8H�^pV���5bf�Db@�9gn1��k-��F�r>j�R�-�X�/(���������鲟�Z��{�,�U�X�sD��5�[$����0l}��xXA
�4�rT�/�Ϙ#�K]�7���M��;vWy��ƶq9r���ظ��W�s|�˗��~9�����_��r�f���H�h�����V�MJs�ϕur9���JtYP�k˪W7���Z�W���B:�r���?Y�Ѝe:2ezSx+�E��=Y���:P���xss���N      "   J   x�%�1�@C�:����,�Z�Z{�sJ�?���q_`�:P-)�E�`Toy���iZVX�iWք���D��7n          -   x�3�4��M�I��I�-(�K�44264�2�D�46����� Xn�      $   _   x�34�BCC#cCN�Ԃ���.CNSN� gHQb^qZj��%�F�H��%)E��\FFXEM �F��H¦a3sK$a3,���qqq ��)�      &   E   x���,Ǫ,�����9z�����FƉ�)Yŉ�)\�Y�y
�)�%� f�CIj1X�.����� |��     