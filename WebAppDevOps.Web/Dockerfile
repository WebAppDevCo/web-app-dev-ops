FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS base
RUN apt-get update -y && apt-get install -y gnupg2 && curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get update -y && apt-get install -y nodejs
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
WORKDIR /src
COPY ["WebAppDevOps.Web.csproj", ""]

RUN dotnet restore "WebAppDevOps.Web.csproj"
COPY . .
WORKDIR "/src/"
RUN apt-get update -yq && apt-get upgrade -yq && apt-get install -yq curl git nano
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && apt-get install -yq nodejs build-essential
RUN npm install -g npm
RUN npm install
RUN dotnet build "WebAppDevOps.Web.csproj" -c Release -o /app

FROM build AS publish
RUN npm install
RUN dotnet publish "WebAppDevOps.Web.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "WebAppDevOps.Web.dll"]
