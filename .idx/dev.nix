# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_22
  ];
  # Sets environment variables in the workspace
  env = {
    NEXT_PUBLIC_FIREBASE_API_KEY = "your_api_key_here";
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = "your_project_id.firebaseapp.com";
    NEXT_PUBLIC_FIREBASE_PROJECT_ID = "your_project_id_here";
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = "your_project_id.appspot.com";
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = "your_sender_id_here";
    NEXT_PUBLIC_FIREBASE_APP_ID = "your_app_id_here";
  };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "google.gemini-cli-vscode-ide-companion"
    ];
    # Enable previews
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT"];
          manager = "web";
        };
      };
    };
    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        npm-install = "npm install";
        default.openFiles = [ ".idx/dev.nix" "README.md" ];
      };
      # Runs when the workspace is (re)started
      onStart = {
      };
    };
  };
}
