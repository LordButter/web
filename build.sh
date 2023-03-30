docker image rm portfolio
docker image rm pocketbase
docker image rm proxy

docker build --no-cache -t portfolio ./portfolio
docker build --no-cache -t pocketbase ./pocketbase
docker build --no-cache -t proxy ./proxy